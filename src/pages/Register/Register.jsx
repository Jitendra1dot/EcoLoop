import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();

    // Check if any field is empty
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      password === "" ||
      confirmPassword === "" ||
      accountType === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    // Check email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Check phone number
    if (!/^\d{10}$/.test(phone)) {
      alert("Phone number must be exactly 10 digits");
      return;
    }

    // Check password length
    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Temporary output
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Account Type:", accountType);

    alert("Registration successful");

    navigate("/login");
  }

  return (
    <div className="register-container">
      <div className="register-card">
      <img
      src="/ecoloop-logo.png"
      alt="EcoLoop Logo"
      className="auth-logo"
      />

        <h1>EcoLoop</h1>
        <h2>Create Account</h2>

        <form className="register-form" onSubmit={handleRegister}>
          <label>Full Name</label>
          <input
            className="input-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
          />

          <label>Email</label>
          <input
            className="input-field"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <label>Phone Number</label>
          <input
            className="input-field"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter 10-digit phone number"
          />

          <label>Password</label>
          <input
            className="input-field"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Minimum 8 characters"
          />

          <label>Confirm Password</label>
          <input
            className="input-field"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter your password"
          />

          <label>Account Type</label>
          <select
            className="input-field"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
          >
            <option value="">Select account type</option>
            <option value="user">User</option>
            <option value="collector">Collector</option>
            <option value="dealer">Scrap Dealer</option>
          </select>

          <button className="register-button" type="submit">
            Register
          </button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;