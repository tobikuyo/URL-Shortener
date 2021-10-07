import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as HeaderImage } from './assets/link-shortener.svg';
import Shortener from './components/Shortener';
import useHelpers from './useHelpers';
import './App.css';

const App = () => {
    const location = useLocation();
    const { urlList, formatUrl } = useHelpers();

    useEffect(() => {
        const checkCode = () => {
            const urlCode = location.pathname.slice(1);
            const urlItem = urlList.find(link => link.code === urlCode);
            const formattedUrl = formatUrl(urlItem?.url);

            if (urlItem) window.location.replace(formattedUrl);
        };

        checkCode();
    }, [formatUrl, location, urlList]);

    return (
        <div className="container">
            <HeaderImage />
            <Shortener />
        </div>
    );
};

export default App;
