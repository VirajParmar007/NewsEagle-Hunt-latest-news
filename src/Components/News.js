import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    
    const capitalizeFirstLLetter = (string) => {
        return (string.charAt(0).toUpperCase()) + (string.substr(1).toLowerCase());
    }
    
    const updatenews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(60);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }
    useEffect(() => {
        document.title = `NewsEasgle - ${capitalizeFirstLLetter(props.category)}`;
        updatenews()
    }, [])



    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }


    return (
        <>
            <div className="container my-3"  >
                <h2 id="top" className="text-center" >News Eagle - Top Headlines {capitalizeFirstLLetter(props.category)}</h2>
                <hr style={{ border: '1px solid', opacity: '0.6', marginBottom: '30px' }} />
            </div>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length != totalResults}
                loader={<Spinner />}
            >
                <div className="container my-3"  >
                    <div className="row">
                        {articles.map((element) => {
                            return <div key={element.url} className="col-md-4 py-1 px-1"><NewsItem title={element.title} description={element.description === null ? "..." : element.description.slice(0, 180)} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}

                    </div>
                </div>
            </InfiniteScroll>

            <button type="button" className="btn btn-dark btn-sm rounded-5 opacity-75 shadow-lg p-3 mb-5  rounded" style={{
                margin: '20px',
                bottom: '6%',
                position: 'sticky',
                left: '91%'}}>
                <a className="nav-link" href="#top">&#9651;</a>
                <a className="nav-link" href="#top">Top</a>
                </button>

        </>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 10,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News
