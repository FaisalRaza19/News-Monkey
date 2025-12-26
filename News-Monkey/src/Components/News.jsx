import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = ({ country = 'us', category = 'general', apiKey, pageSize = 8, setProgress }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    const updateNews = async () => {
        setProgress(10);
        setLoading(true);
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
        try {
            let data = await fetch(url);
            setProgress(30);
            let parsedData = await data.json();
            setProgress(70);
            setArticles(parsedData.articles || []);
            setTotalResults(parsedData.totalResults || 0);
            setLoading(false);
            setProgress(100);
        } catch (error) {
            console.error('Error fetching news:', error);
            setLoading(false);
            setProgress(100);
        }
    };

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(category)} - NewsMonkey`;
        updateNews();
    }, [country, category]);

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page + 1}&pageSize=${pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles || []));
        setTotalResults(parsedData.totalResults || 0);
    };

    return (
        <>
            <h1 className="text-center justify-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
                NewsMonkey - Top {capitalizeFirstLetter(category)} Headlines
            </h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={element.title || ''}
                                    description={element.description || ''}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
};

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    apiKey: PropTypes.string.isRequired,
    pageSize: PropTypes.number,
    setProgress: PropTypes.func,
};

export default News;
