import React from "react";

export default function AllEventSwitchingSlides({
  eventsPages,
  handleClick,
  currentind,
}) {
  var pages = [];
  for (let index = 0; index < eventsPages; index++) {
    pages.push(
      <li className="page-item " key={index}>
        <button
          onClick={handleClick.bind(null, index)}
          className="page-link text-dark"
        >
          {/* <button onClick={(e)=>handleClick(index)} className="page-link text-dark" > */}
          {index + 1}
        </button>
      </li>
    );
    // console.log('currentind', currentind)
  }
  return (
    <div>
      {" "}
      <div className="container">
        <div className="row mt-4 d-flex justify-content-center align-middle align-content-center">
          <div className="col ">
            <nav aria-label="Page navigation example ">
              <ul className="pagination justify-content-end">
                <li className="page-item">
                  <button
                    onClick={(e) => handleClick("Previous")}
                    className={
                      currentind == 0
                        ? "page-link disabled"
                        : "link-danger page-link"
                    }
                  >
                    Previous
                  </button>
                </li>
                {pages}
                <li className="page-item">
                  <button
                    onClick={(e) => handleClick("Next")}
                    className={
                      currentind == eventsPages - 1
                        ? "page-link disabled"
                        : "link-danger page-link"
                    }
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
