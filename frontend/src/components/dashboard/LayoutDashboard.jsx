import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import HeaderDashboard from "./HeaderDashboard";
import NavbarDashboard from "../NavbarDashboard";
import { afterDeleting } from "./events/AfterDeleting";
import { defineLocale } from "moment";

export default function LayoutDashboard() {
  //localStorage.getItem("login")?
  if (localStorage.getItem("login")) {
    return (
      <div>
        <HeaderDashboard />
        <div className="container-fluid">
          <div className="row">
            <NavbarDashboard />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    );
  } else {
    afterDeleting(
      // `this route is bolcked \ndeneed access!! ${<i class="bi bi-exclamation-octagon-fill"></i>}`
      "this route is bolcked \ndenied access!!⛔️"
    );
    return <Navigate to="/login" />;
  }
}
