import React from "react";
import { Link } from "react-router-dom";

function NavBar2() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white sticky-top-0  p-4"
      id="navbar"
    >
      <div className="container">
        <h1>
          <a
            className=" navbar-brand  fs-2 pe-5"
            href="/"
            style={{
              fontFamily: '"Montserrat"',
              letterSpacing: 1,
              fontWeight: 700,
            }}
          >
            Ticket<span style={{ color: "rgb(240, 84, 27)" }}>to.</span>
          </a>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav m-auto my-2 my-lg-0"
            style={{ fontFamily: '"Poppins"' }}
          >
            <li className="nav-item">
              <Link className="nav-link pe-5 navigation" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <a className="nav-link pe-5 navigation" href="/aboutUs">
                About
              </a>
            </li>
            <li className="nav-item ">
              <Link to="/news" className="nav-link pe-5 navigation" href="#">
                News
              </Link>
            </li>
            <li className="nav-item dropdown ">
              <p
                className="nav-link pe-5 navigation dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Events
              </p>
              <ul className="dropdown-menu">
                <li>
                  {" "}
                  <Link to="/events" className="dropdown-item" href="#">
                    Upcoming Events
                  </Link>
                </li>
                {localStorage.getItem("login") ? (
                  <li>
                    <Link to="/dashboard" className="dropdown-item" href="#">
                      Dashboard{" "}
                      <i
                        className="fa fa-dashboard text-secondary"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </li>
                ) : null}
                <li>
                  <a className="dropdown-item" href="/addEvent">
                    Create Event
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link pe-5 navigation" to="/contactUs">
                Contact
              </Link>
            </li>
          </ul>
          <div className="d-flex justify-content-start ">
            <div className="row">
              <div className="col">
                <a href="/addEvent" className="btn btn-dark rounded-1  p-2 ">
                  Create Event <i className="bi bi-calendar2-plus fs-5 ms-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar2;
