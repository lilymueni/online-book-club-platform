import React from "react";
import SignUpForm from "../components/SignUpForm";

const Signup = ({ onSignup, onLogin }) => {
  return (
    <div>
      <h1>Sign Up</h1>
      <p>Join the GEN-Z BOOKCLUB community.</p>
      <SignUpForm onLogin={onLogin} />
    </div>
  );
};

export default Signup;
