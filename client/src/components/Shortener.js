import useHelpers from '../useHelpers';

const Shortener = () => {
    const { code, url, setUrl, handleSubmit } = useHelpers();

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
                >{`https://shrinkio.herokuapp.com/${code}`}</a>
            )}
        </>
    );
};

export default Shortener;
