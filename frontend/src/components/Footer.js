import React from "react";

export default function Footer() {
  return (
    <div className="small bg-dark text-white mb-0">
      <div className="container py-3 py-sm-5">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <h6>Quick links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="index.html" className="nav-link link-light">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link link-light">
                  Services
                </a>
              </li>
              <li>
                <a href="about.html" className="nav-link link-light">
                  About
                </a>
              </li>
              <li>
                <a href="team.html" className="nav-link link-light">
                  Team
                </a>
              </li>
              <li>
                <a href="contact.html" className="nav-link link-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h6>Information</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#0" className="nav-link link-light">
                  Legal information
                </a>
              </li>
              <li>
                <a href="#0" className="nav-link link-light">
                  Job opportunities
                </a>
              </li>
              <li>
                <a href="#0" className="nav-link link-light">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h6>Follow us</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#0" className="nav-link link-light">
                  <i className="fab fa-fw fa-facebook" /> Facebook
                </a>
              </li>
              <li>
                <a href="#0" className="nav-link link-light">
                  <i className="fab fa-fw fa-instagram" /> Instagram
                </a>
              </li>
              <li>
                <a href="#0" className="nav-link link-light">
                  <i className="fab fa-fw fa-twitter" /> Twitter
                </a>
              </li>
              <li>
                <a href="#0" className="nav-link link-light">
                  <i className="fab fa-fw fa-youtube" /> YouTube
                </a>
              </li>
              <li>
                <a href="#0" className="nav-link link-light">
                  <i className="fab fa-fw fa-linkedin" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h6>Our location</h6>
            <address>
              <strong>Company Name</strong>
              <br />
              Steet Name
              <br />
              ZIP code and city
              <br />
              <i className="fas fa-fw fa-phone" />{" "}
              <a href="tel:+1234567890" style={{ color: "#f66d36" }}>
                (+216) 21203433
              </a>
              <br />
              <i className="fas fa-fw fa-envelope" />{" "}
              <a href="mailto:info@domain.com" style={{ color: "#f66d36" }}>
                contact@ticketto.com
              </a>
            </address>
          </div>
        </div>
        <hr />
        <ul className="list-inline mt-2 mb-0 text-center ">
          <li className="list-inline-item"> © 2020 Ticketto.</li>
          <li className="list-inline-item">All rights reserved.</li>
        </ul>
      </div>
    </div>
  );
}
