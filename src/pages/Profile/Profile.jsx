import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("Jitendra");
  const [email, setEmail] = useState("jitendra18y.d@gmail.com");
  const [phone, setPhone] = useState("");
  const [accountType, setAccountType] = useState("User");

  function handleSave() {
    if (name.trim() === "") {
      alert("Please enter your name");
      return;
    }

    if (email.trim() === "") {
      alert("Please enter your email");
      return;
    }

    setIsEditing(false);

    alert("Profile updated successfully!");
  }

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  }

  return (
    <div className="profile-container">

      {/* HEADER */}

      <div className="profile-header">

        <h1>
          My Profile
        </h1>

        <p>
          Manage your EcoLoop account details.
        </p>

      </div>


      {/* PROFILE CARD */}

      <div className="profile-card">

        {/* PROFILE TOP */}

        <div className="profile-top">

          <div className="profile-avatar">
            {name.charAt(0).toUpperCase()}
          </div>

          <div className="profile-name">

            <h2>
              {name}
            </h2>

            <p>
              {accountType}
            </p>

          </div>

        </div>


        {/* PROFILE DETAILS */}

        <div className="profile-details">

          {/* NAME */}

          <div className="profile-field">

            <label>
              Full Name
            </label>

            {isEditing ? (

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

            ) : (

              <p>
                {name}
              </p>

            )}

          </div>


          {/* EMAIL */}

          <div className="profile-field">

            <label>
              Email
            </label>

            {isEditing ? (

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            ) : (

              <p>
                {email}
              </p>

            )}

          </div>


          {/* PHONE */}

          <div className="profile-field">

            <label>
              Phone Number
            </label>

            {isEditing ? (

              <input
                type="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
                placeholder="Enter phone number"
              />

            ) : (

              <p>
                {phone || "Not added"}
              </p>

            )}

          </div>


          {/* ACCOUNT TYPE */}

          <div className="profile-field">

            <label>
              Account Type
            </label>

            <p>
              {accountType}
            </p>

          </div>

        </div>


        {/* ACTION BUTTONS */}

        <div className="profile-actions">

          {isEditing ? (

            <>
              <button
                className="save-profile-button"
                onClick={handleSave}
              >
                Save Changes
              </button>

              <button
                className="cancel-profile-button"
                onClick={() =>
                  setIsEditing(false)
                }
              >
                Cancel
              </button>
            </>

          ) : (

            <button
              className="edit-profile-button"
              onClick={() =>
                setIsEditing(true)
              }
            >
              Edit Profile
            </button>

          )}

        </div>

      </div>


      {/* ACCOUNT ACTIONS */}

      <div className="account-actions">

        <h2>
          Account
        </h2>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Profile;