import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../store/user-context";
function Navbar1() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("login");
    localStorage.removeItem("userId");
    navigate("/login");
    window.location.reload();
  }

  const userCtx = useContext(userContext);

  // useEffect(() => {
  //   userCtx.getUserByID(localStorage.getItem("userId"));
  // }, []);
  // function click() {
  //   console.log("logged User", userCtx.user);
  // }

  // const [loggedUser, setLoggedUser] = useState({});

  // useEffect(() => {
  //   console.log("loggedUser==>", loggedUser);
  // }, [loggedUser]);

  return (
    <>
      <header className="p-2 text-bg-dark mt-0">
        <div className="container-fluid">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 py-2">
              <li>
                {" "}
                <a href="#" className=" nav-link nav1 link-light fs-6">
                  {" "}
                  <i className="fa fa-envelope nav1  me-2" aria-hidden="true" />
                  contact@ticketto.com
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className=" nav-link nav1 link-light fs-6 ">
                  {" "}
                  <i className="fa fa-phone nav1  me-2" aria-hidden="true" />
                  (+216) 21203433
                </a>
              </li>
            </ul>
            <div className="text-end d-flex  py-lg-3   ">
              {/* <button type="button" onClick={click}>
                ppp
              </button> */}
              <div className="d-flex justify-content-start">
                {
                  !localStorage.getItem("login") ? (
                    <>
                      {" "}
                      <i
                        className="fa fa-user-circle fs-3 me-2   ms-2"
                        aria-hidden="true"
                      />
                      <Link to="/login" className="nav-link nav1 fs-6">
                        Sign In
                      </Link>
                      {/* &emsp; //*espace quadruple
                &ensp; //*espace double
                &nbsp; //*espace simple  */}
                      <Link to="/signup" className="nav-link nav1 fs-6 ">
                        <i
                          className="bi bi-three-dots-vertical "
                          style={{ color: "#F66D36" }}
                        />
                        Sign-up
                      </Link>
                    </>
                  ) : (
                    <ul className="navbar-nav ">
                      <li className="nav-item dropdown d-flex align-items-center ">
                        <a href="#" className="nav-link link-secondary">
                          {" "}
                          <i
                            className="px-2 fs-4 me-1 text-white bi bi-search"
                            id="search-search"
                          />
                        </a>
                        <a href="#" className="nav-link link-secondary">
                          {" "}
                          <i
                            className="px-2 fs-4 me-1 text-white bi bi-cart-fill"
                            id="cart"
                          />
                        </a>
                        {/*  <input
                          className="mainLoginInput form-control me-2 searchinput "
                          type="text"
                          placeholder="search..."
                        /> */}
                        <a
                          className="nav-link dropdown-toggle"
                          id="navbardrop"
                          data-bs-toggle="dropdown"
                        >
                          <i className="fa fa-user-circle fs-3 text-white"></i>
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
                          {localStorage.getItem("login") ? (
                            <Link
                              to="/dashboard"
                              className="dropdown-item"
                              href="#"
                            >
                              Dashboard{" "}
                              <i
                                className="fa fa-dashboard text-secondary"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          ) : null}
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
                  )
                  // userCtx.user.length ? () : (
                  //   <div
                  //     style={{
                  //       display: "flex",
                  //       justifyContent: "center",
                  //     }}
                  //   >
                  //     <LoadingSpinner></LoadingSpinner>
                  //   </div>
                  // )
                }
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Navbar1;
