import { useEffect, useState } from 'react';
import axiosInstance from '../api';

const initialUrlInfo = {
    url: '',
    code: ''
};

const Shortener = () => {
    const [urlList, setUrlList] = useState([]);
    const [urlInfo, setUrlInfo] = useState(initialUrlInfo);

    useEffect(() => {
        const getAllUrls = async () => {
            try {
                const { data } = await axiosInstance.get('/urls');
                // TODO: Check how the data comes from the server and change the urlList state
                // setUrlList(data);
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
            <form className="container__form">
                <input
                    type="text"
                    placeholder="Shorten your link"
                    className="container__input"
                />
                <input type="submit" value="Shorten" className="container__submit" />
            </form>
        </>
    );
};

export default Shortener;
