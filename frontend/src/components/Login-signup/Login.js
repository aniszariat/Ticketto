import React from "react";
import GetUsers from "./GetUsers";
import LoginForm from "./LoginForm";
import SignHolder from "./SignHolder";
function Login() {
  return (
    <div>
      <SignHolder word1="Sign" word2="In">
        <LoginForm></LoginForm>
        {/* <GetUsers></GetUsers> */}
      </SignHolder>
    </div>
  );
}

export default Login;
