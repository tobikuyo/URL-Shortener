import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import axiosInstance from '../api';

const Shortener = () => {
    const [urlList, setUrlList] = useState([]);
    const [url, setUrl] = useState('');
    const [code, setCode] = useState('');

    /**
     * Checks to see if a url has already been added to the database and returns it's code it already exists.
     * @returns {object} urlInfo
     */
    const checkIfUrlExists = () => {
        if (urlList.some(link => link.url === url)) {
            const index = urlList.findIndex(link => link.url === url);
            return urlList[index];
        }
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const existingUrl = checkIfUrlExists();

        if (existingUrl) {
            setUrl(existingUrl?.url);
            setCode(existingUrl?.code);
            return;
        }

        try {
            const nanoCode = nanoid(7);
            setCode(nanoCode);
            await axiosInstance.post('/api/urls/', { url, code: nanoCode });
        } catch (error) {
            console.error('Error adding new url', error.message);
        }
    };

    useEffect(() => {
        const getAllUrls = async () => {
            try {
                const { data } = await axiosInstance.get('/api/urls');
                console.log('urls ', data);
                setUrlList(data);
            } catch (error) {
                console.error('Error getting all urls from server: ', error.message);
            }
        };

        getAllUrls();
    }, []);

    return (
        <>
            <h1 className="container__heading">Short links, big results</h1>
            <p className="container__text">
                A URL shortener to solve the problem of typing in very long urls.
            </p>
            <form className="container__form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Shorten your link"
                    className="container__input"
                    value={url}
                    onChange={event => setUrl(event.target.value)}
                />
                <input type="submit" value="Shorten" className="container__submit" />
            </form>
            {code && <a className="container__link" href={url}>{`sh.rt/${code}`}</a>}
        </>
    );
};

export default Shortener;
