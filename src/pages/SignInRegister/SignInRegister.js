import React from "react";

import "./SignInRegister.scss";

import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const SignInRegister = () => {
  return (
    <div className="sign-in-register">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};

export default SignInRegister;
