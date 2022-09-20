import React from "react";
import { Link } from "react-router-dom";

function View({ rendredIn }) {
  return (
    <div className="container">
      <div className="row ">
        <div className="col d-flex justify-content-between align-content-between align-middle mb-3">
          <p className="text-muted  fs-6"> Lorem, ipsum dolor</p>
          <div className="mb-3">
            <Link
              to={rendredIn == "news" ? "/news" : "/events"}
              className=" btn btn-light text-muted"
              aria-hidden="true"
            >
              {" "}
              View All{" "}
              <i
                className="fa fa-arrow-right BookT text-muted ms-2"
                aria-hidden="true"
              />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
