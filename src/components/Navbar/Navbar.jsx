import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  }

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">🌱 EcoLoop</Link>
      </div>

      {/* Main Navigation */}
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/pickup">Pickup</Link>
        <Link to="/marketplace">Marketplace</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/ecovault">My EcoVault</Link>
      </div>

      {/* Login / Register / Logout */}
      <div className="navbar-auth">

        {!isLoggedIn ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button
            className="logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}

      </div>

    </nav>
  );
}

export default Navbar;