import React from "react";

function NewsItem({ items, keys }) {
  return (
    <div className="col-lg-4 mb-4">
      <div className="card border-0 shadow ">
        <a href="#!">
          <img
            className="card-img-top img-fluid"
            src={items.PosterNews}
            alt="news du dimanche"
          />
        </a>
        <div className="card-body p-5">
          <p className="text-sm text-muted mb-2">{items.DateNews}</p>
          <h3 className="h5">
            <a className="link-dark nav-link" href="#!">
              {items.TitleNewsPost}
            </a>
          </h3>
          <p className="text-sm text-muted">{items.NewsBodyPost}...</p>
          <a href="#" style={{ color: "#f66d36" }}>
            Read more &raquo;
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
