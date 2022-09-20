import React from "react";
import SignHolder from "./SignHolder";
import SignUpForm from "./SignUpForm";

function SignUp() {
  return (
    <div>
      <SignHolder word1="Create" word2="Acount">
        <SignUpForm></SignUpForm>
      </SignHolder>
    </div>
  );
}

export default SignUp;
