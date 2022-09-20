import React from "react";

function CallToaction() {
  return (
    <div className="card bg-dark rounded-0 mb-5 ">
      <div className="card-body container p-5 text-center">
        <h1
          className="text-white display-1 fw-semibold mb-4 text-capitalize"
          style={{ fontFamily: '"Montserrat" sans-serif' }}
        >
          Deal Of The Day{" "}
          <strong style={{ color: "rgb(237, 90, 37)" }}>40 % </strong> !
        </h1>
        <p className=" fs-4 text-white mb-5">
          Register today and get 40% OFF from your first purchase.
        </p>
        <a
          className="btn btn-outline-dark btn-lg rounded-1 fondDash"
          style={{ backgroundColor: "rgb(237, 90, 37)", color: "white" }}
          href="#"
        >
          View details{" "}
        </a>
      </div>
    </div>
  );
}

export default CallToaction;
