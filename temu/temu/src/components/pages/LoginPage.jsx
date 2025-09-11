// src/pages/LoginPage.jsx
import React from "react";
import LoginForm from "../molecules/LoginForm.jsx";
import "./AuthPages.css"; // shared CSS

import { useAuth } from "../../auth/useAuth";

import { useNavigate, useLocation, Link } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [err, setErr] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const from = location.state?.from?.pathname || "/";

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await login(email, password);
      
      navigate(from, { replace: true });
    } catch (err) {
      setErr("Failed to log in");
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  // const handleLogin = (data) => {
  //   console.log("Login Data:", data);
  //   // TODO: send to backend API: POST /auth/login
  // };

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* <LoginForm onSubmit={handleSubmit} /> */}

        <form onSubmit={handleSubmit} className="form-container">
          <h2 className="form-title">Login</h2>
          {err && <div className="error-message">{err}</div>}
          <p className="auth-footer">
            Don’t have an account? <a href="/signup">Sign Up</a>
          </p>

          <input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button disabled={loading} className="form-button" type="submit">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
