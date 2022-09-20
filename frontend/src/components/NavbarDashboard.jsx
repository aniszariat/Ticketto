import React from "react";
import { Link } from "react-router-dom";
export default function NavbarDashboard() {
  const isAdmin = localStorage.getItem("admin");
  const user = localStorage.getItem("userId");
  console.log(user);
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse "
    >
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item dhashHome">
            <Link
              to="/"
              className="nav-link active "
              aria-current="page"
              href="/dashboard"
            >
              <i className="bi bi-house-door me-2 " />
              Home page
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link create " href="/listEvent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-calendar me-2 "
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
              </svg>
              Events
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link create" href="/reports">
              <i className="bi bi-graph-up-arrow me-2"></i>
              Reports
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link create" href="/listTicket">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-ticket-detailed  me-2"
                viewBox="0 0 16 16"
              >
                <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5ZM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5h-13Z" />
              </svg>
              Tickets
            </a>
          </li>
          <li className="nav-item">
            <Link to="/Blog" className="nav-link create" href="/blog">
              <i className="bi bi-blockquote-right fs-5 text-dark " /> Blog
              Posts
            </Link>
          </li>
          {user == isAdmin ? (
            <li className="nav-item">
              <Link to="/User" className="nav-link create" href="/user">
                <i className="bi bi-people-fill fs-5 text-dark " /> Users
              </Link>
            </li>
          ) : null}
        </ul>
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
          <span>Operations</span>
          <a className="link-secondary " href="#" aria-label="Add a new report">
            <span data-feather="plus-circle" className="align-text-bottom" />
          </a>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <a className="nav-link create" href="/addEvent">
              <i className="bi bi-calendar-plus  me-2" />
              Create Event
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link create" href="/addTicket">
              <i className="bi bi-ticket-detailed  me-2" />
              Create Ticket
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link create" href="/addPost">
              <i className="bi bi-journal-richtext  me-2" />
              Create Blog Posts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link create" href="/profilSettings">
              <i className="bi bi-gear  me-2" />
              Profile settings
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
