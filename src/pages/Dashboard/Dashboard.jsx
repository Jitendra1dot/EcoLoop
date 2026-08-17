import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
    const navigate = useNavigate();
  const [pickups] = useState([
    {
      id: 1,
      type: "PET",
      quantity: 2,
      amount: 60,
      status: "Waiting for Collector",
      date: "17 Aug 2026",
    },
    {
      id: 2,
      type: "HDPE",
      quantity: 3,
      amount: 105,
      status: "Completed",
      date: "15 Aug 2026",
    },
    {
      id: 3,
      type: "PP",
      quantity: 2.5,
      amount: 70,
      status: "Completed",
      date: "12 Aug 2026",
    },
  ]);

  const ecoVaultItems = JSON.parse(
    localStorage.getItem("ecoVaultItems") || "[]"
  );

  const ecoVaultTotal = ecoVaultItems.reduce(
    (total, item) => total + Number(item.quantity),
    0
  );

  const totalSold = pickups.reduce(
    (total, pickup) => total + pickup.quantity,
    0
  );

  const totalEarnings = pickups.reduce(
    (total, pickup) => total + pickup.amount,
    0
  );

  return (
    <div className="dashboard-container">

      {/* HEADER */}

      <div className="dashboard-header">

        <h1>
          Dashboard
        </h1>

        <p>
          Welcome back! Manage your EcoLoop
          activities from here.
        </p>

      </div>


      {/* SUMMARY CARDS */}

      <div className="dashboard-stats">

        <div className="dashboard-stat-card">

          <span className="stat-icon">
            ♻️
          </span>

          <div>
            <p>
              EcoVault
            </p>

            <h2>
              {ecoVaultTotal.toFixed(1)} kg
            </h2>
          </div>

        </div>


        <div className="dashboard-stat-card">

          <span className="stat-icon">
            📦
          </span>

          <div>
            <p>
              Total Plastic Sold
            </p>

            <h2>
              {totalSold.toFixed(1)} kg
            </h2>
          </div>

        </div>


        <div className="dashboard-stat-card">

          <span className="stat-icon">
            💰
          </span>

          <div>
            <p>
              Total Earnings
            </p>

            <h2>
              ₹{totalEarnings}
            </h2>
          </div>

        </div>


        <div className="dashboard-stat-card">

          <span className="stat-icon">
            🚚
          </span>

          <div>
            <p>
              Total Pickups
            </p>

            <h2>
              {pickups.length}
            </h2>
          </div>

        </div>

      </div>


      {/* RECENT PICKUPS */}

      <div className="recent-pickups">

        <div className="section-heading">

          <h2>
            Recent Pickups
          </h2>

        </div>


        {pickups.length === 0 ? (

          <div className="no-pickups">

            <span>
              📦
            </span>

            <h3>
              No pickups yet
            </h3>

            <p>
              Your pickup activity will appear here.
            </p>

          </div>

        ) : (

          <div className="pickup-list">

            {pickups.map((pickup) => (

              <div
                className="dashboard-pickup-card"
                key={pickup.id}
              >

                <div className="pickup-info">

                  <div className="pickup-icon">
                    ♻️
                  </div>

                  <div>

                    <h3>
                      {pickup.type} Plastic
                    </h3>

                    <p>
                      {pickup.quantity} kg
                    </p>

                  </div>

                </div>


                <div className="pickup-date">

                  <span>
                    {pickup.date}
                  </span>

                </div>


                <div className="pickup-amount">

                  <strong>
                    ₹{pickup.amount}
                  </strong>

                </div>


                <div
                  className={
                    pickup.status === "Completed"
                      ? "pickup-status completed"
                      : "pickup-status waiting"
                  }
                >
                  {pickup.status}
                </div>

              </div>

            ))}

          </div>

        )}

      </div>


      {/* QUICK ACTIONS */}

      <div className="quick-actions">

        <h2>
          Quick Actions
        </h2>

        <div className="quick-action-buttons">

  <button
    onClick={() => navigate("/ecovault")}
  >
    ♻️
    <span>
      View EcoVault
    </span>
  </button>

  <button
    onClick={() => navigate("/pickup")}
  >
    🚚
    <span>
      Request Pickup
    </span>
  </button>

  <button
    onClick={() => navigate("/marketplace")}
  >
    🛍️
    <span>
      Visit Marketplace
    </span>
  </button>

</div>

      </div>

    </div>
  );
}

export default Dashboard;