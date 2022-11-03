const NewsItem = (props) => {

    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
        <>


            <div href={newsUrl} target="_blank" className="card  card border-dark mb-4 shadow-lg mb-2 bg-body rounded">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="badge text-bg-danger">
                        {source}
                    </span>
                </div>
                <img src={!imgUrl ? "https://i.ytimg.com/vi/A1LtAYGom9Y/maxresdefault.jpg" : imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author == null ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank"><small className="btn btn-outline-dark btn-sm">Read full</small></a>

                </div>
            </div>

        </>
    )
}
export default NewsItem