import React from "react";
import s1 from "../../assets/carousselSlides/s-8.jpg";
import s2 from "../../assets/carousselSlides/s-7.jpg";
import s3 from "../../assets/carousselSlides/s-10.webp";

function HomeCaroussel() {
  return (
    <div>
      {/*caroussel event*/}
      <div className="container mb-5">
        <div className="row">
          <div className="col h-25">
            <div
              id="carouselExampleCaptions"
              className="carousel slide h-25"
              data-bs-ride="false"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
              </div>
              <div className="carousel-inner ">
                <div className="carousel-item  active">
                  <img src={s1} className="d-block w-100" alt="..." />
                  
                </div>
                <div className="carousel-item">
                  <img src={s2} className="d-block w-100" alt="..." />
               
                </div>
                <div className="carousel-item">
                  <img src={s3} className="d-block w-100" alt="..." />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCaroussel;