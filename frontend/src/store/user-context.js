import React, { createContext, useState } from "react";
import jwt from "jwt-decode"; // import dependency
import { method } from "lodash";
export const userContext = createContext({
  usersTab: [],
  reqRes: [],
  signup: () => {},
  getAllUsers: () => {},
  login: () => {},
  getUserByID: () => {},
  user: {},
});
function UserContextProvider(props) {
  const [usTab, setUsTab] = useState([]);
  const [reqRes, setReqRes] = useState([]);
  const [user, setUser] = useState({});
  //const [isLoggedIn,SetisLoggedIn] = useState(false)
  function signup(data) {
    fetch("user/signup", {
      method: "POST",
      body: data,
    })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          alert("successfully submited !, Please Login");
        }
      })
      .catch((err) => {
        alert("erreur inconnue");
      });
  }
  // function login(registredUser,loginTest) {
  function login(registredUser) {
    //setReqRes(new Array());
    console.log("reqRes before every fecth ::", reqRes);
    fetch("user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...registredUser }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json) {
          return alert("Something happened, please retry");
        }
        const { token, userId, message } = json;
        if (!token || !userId) return alert(message);
        localStorage.setItem("login", `Bearer ${token}`);
        localStorage.setItem("userId", userId);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }
  function getUserByID(id) {
    fetch(`/user/${id}`, {
      method: "GET",
      //body: JSON.stringify(),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(
        (data) => setUser({ ...data })
        // console.log("recieved id :", id);
        // console.log("data  :::", data);
        // console.log(user);
      );
  }

  function getAllUsers() {
    fetch("/user/all", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setUsTab(data));
  }

  const context = {
    usersTab: usTab,
    reqRes: reqRes,
    signup: signup,
    getAllUsers: getAllUsers,
    login: login,
    getUserByID: getUserByID,
    user: user,
  };

  return (
    <userContext.Provider value={context}>
      {props.children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
