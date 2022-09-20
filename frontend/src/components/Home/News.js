import React, { useEffect, useState } from "react";
import { getNews } from "../../service/newsAPI";
import NewsItem from "./NewsItem";
import View from "./View";
export default function News() {
  const [news, setnews] = useState([]);
  useEffect(() => {
    getNews().then((res) => {
      console.table(res?.data);
      setnews(res?.data);
    });
  }, []);
  return (
    <section id="news " className="mb-4">
      <div className="container">
        {/*title start*/}
        <div className="row">
          <div className="section-title mt-4">
            <h2>News</h2>
            <p>Latest News</p>
          </div>
        </div>
        {/*title end*/}
        <View rendredIn="news"></View>
        <div className="row">
          {news?.map((items, keys) => (
            <NewsItem items={items} key={keys} keys={keys} />
          ))}
        </div>
      </div>
    </section>
  );
}
