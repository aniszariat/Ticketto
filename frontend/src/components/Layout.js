import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { userContext } from "../store/user-context";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout() {
  const [logged, setLogged] = useState({});
  const userCtx = useContext(userContext);

  if (localStorage.getItem("userId")) {
    window.onload = (event) => {
      userCtx.getUserByID(localStorage.getItem("userId"));
    };
    console.log("logged User", userCtx.user);
    //setLogged(userCtx.user);
  }

  return (
    <div>
      <div className="sticky-top">
        <NavBar></NavBar>
      </div>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
