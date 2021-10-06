const Shortener = () => {
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
