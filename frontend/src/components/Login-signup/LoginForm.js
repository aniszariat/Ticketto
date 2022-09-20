import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../store/user-context";
const _ = require("lodash");
function LoginForm() {
  const userCtx = useContext(userContext);
  const navigate = useNavigate();
  const [registredUser, setregistredUser] = useState({
    Email: "",
    Password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setregistredUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(e.target.value);
  };
  // console.log("libre", userCtx.reqRes);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("registredUser", registredUser);
    await userCtx.login(registredUser);

    setTimeout(() => {
      console.log("retard d'une seconde");
      localStorage.getItem("login")
        ? navigate("/")
        : alert("please enter a valid email or password !");
    }, 500);
  };

  return (
    <form
      method="post"
      className="forms-sample border-danger"
      onSubmit={handleSubmit}
    >
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control w-75 mb-3"
          id="floatingInput"
          placeholder="name@example.com"
          name="Email"
          onChange={handleChange}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control w-75 mb-3"
          id="floatingPassword"
          placeholder="Password"
          name="Password"
          onChange={handleChange}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="form-check form-check-flat form-check-success">
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input" />
          Remember me
        </label>
      </div>
      <div className="mt-3 btn-group ">
        <button
          type="submit"
          className="btn btn-dark rounded-1  mb-2 p-2 me-2 org"
        >
          Sign In
        </button>
        <Link
          to="/signup"
          type="button"
          className="btn btn-outline-dark rounded-1 mb-2 p-2   org"
        >
          Create account
        </Link>
      </div>
      <a href="login.html" className="d-block mt-3 text-muted">
        Forgot Password?{" "}
      </a>
    </form>
  );
}

export default LoginForm;
