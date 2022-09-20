import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar1() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("login", "userId");
    localStorage.removeItem("userId");
    //navigate('/login')
    window.location.reload();
  }
  return (
    <header className="p-2 text-bg-dark mt-0">
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
            <li>
              {" "}
              <a href="#" className=" nav-link link-light">
                {" "}
                <i className="fa fa-envelope  me-2" aria-hidden="true" />
                contact@example.com
              </a>
            </li>
            <li>
              {" "}
              <a href="#" className=" nav-link link-light ">
                {" "}
                <i className="fa fa-phone  me-2" aria-hidden="true" />
                (+216) 21203433
              </a>
            </li>
          </ul>
          <div className="text-end d-flex flew-row  ">
            {!localStorage.getItem("login") ? (
              <>
                <Link to="/login" className="nav-link ">
                  <i
                    className="fa fa-user-circle fs-5 ms-2"
                    aria-hidden="true"
                  />
                  &ensp; Sign In
                </Link>
                {/* &emsp; //*espace quadruple 
                &ensp; //*espace double
                &nbsp; //*espace simple  */}
                &ensp;
                <Link to="/signup" className="nav-link ">
                  <i
                    className="bi bi-three-dots-vertical"
                    style={{ color: "#f66d36" }}
                  />
                  &ensp; Sign-up
                </Link>
              </>
            ) : (
              <ul className="navbar-nav ">
                <li className="nav-item dropdown ">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbardrop"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fa fa-user-circle fs-3 text-secondary"></i>
                  </a>
                  <div className="dropdown-menu">
                    <button
                      type="button"
                      className="dropdown-item"
                      aria-haspopup="true"
                    >
                      profile
                    </button>
                    <button type="button" className="dropdown-item">
                      favorites
                    </button>
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="dropdown-item"
                    >
                      logout
                    </button>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar1;
