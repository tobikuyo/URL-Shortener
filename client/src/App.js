import Shortener from './components/Shortener';
import { ReactComponent as HeaderImage } from './assets/link-shortener.svg';
import './App.css';

const App = () => {
    return (
        <div className="container">
            <HeaderImage />
            <Shortener />
        </div>
    );
};

export default App;
