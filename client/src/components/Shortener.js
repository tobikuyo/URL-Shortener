import { useEffect } from 'react';
import axiosInstance from '../api';
import useHelpers from '../useHelpers';

const Shortener = () => {
    const { code, url, setUrl, setUrlList, handleSubmit } = useHelpers();

    useEffect(() => {
        const getAllUrls = async () => {
            try {
                const { data } = await axiosInstance.get('/api/urls');
                setUrlList(data);
            } catch (error) {
                console.error('Error getting all urls from server: ', error.message);
            }
        };

        getAllUrls();
    }, [setUrlList]);

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
            {code && (
                <a
                    className="container__link"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                >{`sh.rt/${code}`}</a>
            )}
        </>
    );
};

export default Shortener;
