import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import axiosInstance from './api';

const useHelpers = () => {
    const [urlList, setUrlList] = useState([]);
    const [url, setUrl] = useState('');
    const [code, setCode] = useState('');

    /**
     * Checks to see if a url has already been added to the database and returns it's code it already exists.
     * @returns {object} urlInfo
     */
    const checkIfUrlExists = () => {
        const urlItem = urlList.find(link => link.url === url);
        return urlItem;
    };

    /**
     * Checks to see how a user has written the url they want to shorten and it adjusts it accordingly.
     * @returns {string}  url
     */
    const formatUrl = url => {
        if (typeof url !== 'string') return;
        const urlFirstThree = url.substring(0, 3);

        if (urlFirstThree === 'htt') {
            return url;
        } else if (urlFirstThree !== 'www') {
            return `http://www.${url}`;
        } else {
            return `http://${url}`;
        }
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const existingUrl = checkIfUrlExists();

        if (existingUrl) {
            const formattedUrl = formatUrl(url);
            setUrl(formattedUrl);
            setCode(existingUrl.code);
            return;
        }

        const nanoCode = nanoid(7);
        const formattedUrl = formatUrl(url);
        setUrl(formattedUrl);
        setCode(nanoCode);
        setUrlList([...urlList, { url: formattedUrl, code: nanoCode }]);

        try {
            await axiosInstance.post('/api/urls/', { url, code: nanoCode });
        } catch (error) {
            console.error('Error adding new url', error.message);
        }
    };

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

    return { code, url, setUrl, urlList, handleSubmit, formatUrl };
};

export default useHelpers;
