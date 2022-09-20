import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../store/user-context";

export default function SignUpForm() {
  const userCtx = useContext(userContext);
  let navigate = useNavigate();
  const [user, setUser] = useState({
    FirstName: "",
    LastName: "",
    Birthdate: "",
    Email: "",
    Password: "",
  });
  const [ProfileImg, setProfileImg] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    //console.log(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User", user);
    let data = new FormData();
    data.append("FirstName", user.FirstName);
    data.append("LastName", user.LastName);
    data.append("Birthdate", user.Birthdate);
    data.append("Email", user.Email);
    data.append("ProfileImg", ProfileImg);
    data.append("Password", user.Password);
    await userCtx.signup(data);
    navigate("/login");
  };

  return (
    <form className="row g-3 " onSubmit={handleSubmit} method="post">
      <div className="row g-3">
        <div className="col-lg col-12">
          <input
            type="text"
            className="form-control p-3"
            placeholder="First name"
            aria-label="First name"
            name="FirstName"
            onChange={handleChange}
          />
        </div>
        <div className="col-lg col-12">
          <input
            type="text"
            className="form-control p-3"
            placeholder="Last name"
            aria-label="Last name"
            name="LastName"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row g-3">
        <div className="col-12 ">
          <input
            type="date"
            className="form-control p-3"
            placeholder="First name"
            aria-label="Birth Date"
            name="Birthdate"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 col-12">
          <input
            type="email"
            className="form-control p-3"
            id="inputEmail4"
            aria-label="email"
            placeholder="Email"
            name="Email"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6  mb-3 col-12 ">
          <input
            type="password"
            className="form-control p-3"
            id="inputPassword4"
            placeholder="Password"
            name="Password"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="inputZip" className="form-label ">
            Avatar
          </label>
          <input
            type="file"
            className="form-control p-2"
            id="inputZip"
            name="ProfileImg"
            onChange={(e) => setProfileImg(e.target.files[0])}
          />
        </div>

        <div className="mt-3 btn-group ">
          <button
            type="submit"
            className="btn btn-dark rounded-1   mb-2 p-2 me-2   org"
          >
            Sign up
          </button>
          {/* <button type="submit" className="btn btn-outline-dark rounded-1 mb-2 p-2  org">
                      Sing up with <i className="fa fa-linkedin-square fs-5" aria-hidden="true" />
                    </button> */}
        </div>
      </div>
    </form>
  );
}
