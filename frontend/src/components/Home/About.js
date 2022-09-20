import React from "react";

function About() {
  return (
    <div className="container" id="about">
      <div className="row">
        <div className="section-title">
          <h2>About</h2>
          <p>About Us</p>
        </div>
      </div>
      <div className=" row">
        <div className="col-lg-6 col-12 text-justify letter-spacing lead fs-6">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            minima doloremque tenetur assumenda quis vele odit debitis, sapiente
            quidem repudiandae similique erro commodi. Magni assumenda soluta
            praesentium quam!
          </p>
          <p>
            <i className=" me-1 bi bi-check-all Iconetext" />
            Lorem ipsum dolor sit amet.{" "}
          </p>
          <p>
            <i className=" me-1 bi bi-check-all Iconetext" />
            Lorem ipsum dolor sit amet.{" "}
          </p>
          <p>
            <i className=" me-1 bi bi-check-all Iconetext" />
            Lorem ipsum dolor sit amet.{" "}
          </p>
        </div>
        <div className="col-lg-6 col-12 text-justify letter-spacing lead fs-6">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            minima doloremque tenetur assumenda quis vele odit debitis, sapiente
            quidem repudiandae similique erro commodi. Magni assumenda soluta
            praesentium quam!
          </p>
          <a href="#" className="btn btn-dark text-white p-2 rounded-1 w-25">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
