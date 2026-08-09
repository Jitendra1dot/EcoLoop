import { useState } from "react";
import {  useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    // Check empty fields
    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    // Check email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Check password length
    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");

    console.log("Email:", email);
    console.log("Password:", password);

    alert("Login successful");

     navigate("/");
  }

  return (
    <div className="login-container">
      <div className="login-card">

        <img
        src="/ecoloop-logo.png"
        alt="EcoLoop Logo"
        className="auth-logo"
        />

        <h1>EcoLoop</h1>
        <h2>Welcome Back</h2>

        <form className="login-form" onSubmit={handleLogin}>

          <label>Email</label>
          <input
            className="input-field"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            className="input-field"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-button" type="submit">
            Login
          </button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        </form>

      </div>
    </div>
  );
}

export default Login;