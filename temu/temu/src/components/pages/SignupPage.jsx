import React from "react";
import SignupForm from "../molecules/SignupForm.jsx";
import "./AuthPages.css"; // shared CSS

const SignupPage = () => {
  const handleSignup = (data) => {
    console.log("Signup data:", data);
    //TODO: send data to backend API : POST/auth/ register
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <SignupForm onSubmit={handleSignup} />
        <p className="auth-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
