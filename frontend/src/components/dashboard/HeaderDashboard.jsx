import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderDashboard() {
  let navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("login");
    localStorage.removeItem("userId");
    navigate("/login");
    // window.location.reload();
  }
  return (
    <header className="navbar navbar-light sticky-lg-top  flex-md-nowrap p-0 mb-3 shadow-sm ">
      <a
        className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-4 fw-bold"
        href="#"
        style={{ fontFamily: '"Montserrat" sans-serif' }}
      >
        Ticket<span style={{ color: "rgb(240, 84, 27)" }}>to.</span>
      </a>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <input
        className="form-control form-control-dark w-100 rounded-0 border-0"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <div className="navbar-nav ">
        <div className="nav-item text-nowrap bg-dark me-3 ">
          <button
            type="button"
            onClick={handleLogout}
            className="btn btn-dark"
            href="#"
          >
            {" "}
            <i
              className="fa fa-user-circle text-white"
              aria-hidden="true"
            />{" "}
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}
