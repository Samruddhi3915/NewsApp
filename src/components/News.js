import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spin from "./Spin";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  // document.title = `${this.capitializeFirstLetter(
  //     props.category
  //   )} - NewsMonkey`;
  const capitializeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    console.log("pagesize is", props.propSize);
    let data = await fetch(url);
    props.setProgress(30);
    setLoading(true);
    let parsedData = await data.json();
    props.setProgress(60);
    console.log(parsedData);
    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };
  useEffect(() => {
    return () => {
      document.title = `${capitializeFirstLetter(props.category)} - NewsMonkey`;
      updateNews();
    };
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?&country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
  };
  console.log("render");
  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "40px 0px", marginTop: "90px" }}
      >
        NewsMonkey-Top {capitializeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spin />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spin />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : " "}
                    description={element.description ? element.description : ""}
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
News.propTypes = {
  name: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
