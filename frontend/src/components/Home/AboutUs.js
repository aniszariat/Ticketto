import React from "react";
import "./AboutUsStyle.css";
import Partners from "./Partners";
export default function AboutUs() {
  return (
    <div>
      {/*navbar End*/}
      {/* ======= About Section ======= */}
      <div className="container-fluid bg-dark p-5 ">
        <div className="row">
          <div className="col">
            <section
              id="about"
              className="about bg-white p-5 rounded-1 shadow-sm  "
            >
              <div className="container ">
                {/*title start*/}
                <div className="row mb-4">
                  <div className="section-title">
                    <h2>About</h2>
                    <p>About Us</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      src="assets/aboutUs/about.jpg"
                      className="img-fluid"
                      alt="photo"
                    />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content bg-white">
                    <h3>
                      Voluptatem dignissimos provident quasi corporis voluptates
                      sit assumenda.
                    </h3>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check-circle" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check-circle" /> Duis aute irure
                        dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check-circle" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate trideta
                        storacalaperda mastiro dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* End About Section */}
          </div>
        </div>
      </div>

      {/* ======= Counts Section ======= */}
      <section id="counts" className="counts mt-5   ">
        <div className="container">
          {/*title start*/}
          <div className="row d-flex justify-content-center align-content-center ">
            <div className="section-title text-center py-5 ">
              <p>Why Choose Us ?</p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box ">
                <i className="bi bi-emoji-smile  " />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={232}
                  data-purecounter-duration={1}
                  className="purecounter mb-3 "
                />
                <p>
                  <strong>Happy Clients</strong> consequuntur quae qui deca rode
                </p>
                <a href="#">Find out more »</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="bi bi-calendar3" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={521}
                  data-purecounter-duration={1}
                  className="purecounter mb-3"
                />
                <p>
                  <strong>Events Management</strong> adipisci atque cum quia aut
                  numquam delectus
                </p>
                <a href="#">Find out more »</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="bi bi-headset" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={1463}
                  data-purecounter-duration={1}
                  className="purecounter mb-3"
                />
                <p>
                  <strong>Hours Of Support</strong> aut commodi quaerat. Aliquam
                  ratione
                </p>
                <a href="#">Find out more »</a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="bi bi-people" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={15}
                  data-purecounter-duration={1}
                  className="purecounter mb-3"
                />
                <p>
                  <strong>Hard Workers</strong> rerum asperiores dolor molestiae
                  doloribu
                </p>
                <a href="#">Find out more »</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Counts Section */}

      {/* ======= Partners Section ======= */}
      <section id="clients" className=" mt-5 ">
        <div className="container ">
          <div className="section-title ">
            <h2>Partners</h2>
          </div>
          <div className="container  " id="partners"></div>
          <div className="row m-0 py-4">
            <p className="lead fs-6 text-break text-body text-muted">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
            <Partners></Partners>
          </div>
        </div>
      </section>
      {/* End Partners Section */}
      {/* ======= Testimonials Section ======= */}
      <section id="testimonials" className="testimonials  bg-light p-5 ">
        <div className="container">
          {/*title start*/}
          <div className="row">
            <div className="section-title mt-3 mb-5 ">
              <h2>About</h2>
              <p>testimonials</p>
            </div>
          </div>
          {/*title end*/}
          <div className="row">
            <div className="col-lg-4 mb-3 text-center">
              <div className="testimonial-item mt-4 mt-lg-0">
                <img
                  src="assets/aboutUs/testimonials/testimonials-2.jpg"
                  className="testimonial-img"
                  alt="photo"
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i className="fa fa-quote-left" aria-hidden="true" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <i className="fa fa-quote-right" aria-hidden="true" />
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-3 text-center">
              <div className="testimonial-item mt-4 mt-lg-0">
                <img
                  src="assets/aboutUs/testimonials/testimonials-3.jpg"
                  className="testimonial-img"
                  alt="photo"
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i className="fa fa-quote-left" aria-hidden="true" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <i className="fa fa-quote-right" aria-hidden="true" />
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-3 text-center">
              <div className="testimonial-item mt-4 mt-lg-0">
                <img
                  src="assets/aboutUs/testimonials/testimonials-4.jpg"
                  className="testimonial-img"
                  alt="photo"
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i className="fa fa-quote-left" aria-hidden="true" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <i className="fa fa-quote-right" aria-hidden="true" />
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-3 text-center">
              <div className="testimonial-item mt-4 mt-lg-0">
                <img
                  src="assets/aboutUs/testimonials/testimonials-4.jpg"
                  className="testimonial-img"
                  alt="photo"
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i className="fa fa-quote-left" aria-hidden="true" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <i className="fa fa-quote-right" aria-hidden="true" />
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-3 text-center">
              <div className="testimonial-item mt-4 mt-lg-0">
                <img
                  src="assets/aboutUs/testimonials/testimonials-3.jpg"
                  className="testimonial-img"
                  alt="photo"
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i className="fa fa-quote-left" aria-hidden="true" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <i className="fa fa-quote-right" aria-hidden="true" />
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-3 text-center">
              <div className="testimonial-item mt-4 mt-lg-0">
                <img
                  src="assets/aboutUs/testimonials/testimonials-6.jpg"
                  className="testimonial-img"
                  alt="photo"
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i className="fa fa-quote-left" aria-hidden="true" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <i className="fa fa-quote-right" aria-hidden="true" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonials Section */}
    </div>
  );
}
