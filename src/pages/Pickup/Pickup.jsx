import { useState } from "react";
import "./Pickup.css";

function Pickup() {
  const [address, setAddress] = useState("");
  const [plasticType, setPlasticType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const [showReview, setShowReview] = useState(false);
  const [pickupSubmitted, setPickupSubmitted] = useState(false);

  const plasticRates = {
    PET: 30,
    HDPE: 35,
    PVC: 25,
    LDPE: 20,
    PP: 28,
    Other: 15,
  };

  const estimatedAmount =
    plasticType && quantity
      ? Number(quantity) * plasticRates[plasticType]
      : 0;

  // Step 1: Review button
  function handleReview(e) {
    e.preventDefault();

    if (
      address === "" ||
      plasticType === "" ||
      quantity === "" ||
      date === "" ||
      time === ""
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (Number(quantity) <= 0) {
      alert("Quantity must be greater than 0");
      return;
    }

    setShowReview(true);
  }

  // Step 2: Confirm pickup
  function handleConfirm() {
    console.log("Pickup Address:", address);
    console.log("Plastic Type:", plasticType);
    console.log("Quantity:", quantity);
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Notes:", notes);
    console.log("Estimated Amount:", estimatedAmount);

    setPickupSubmitted(true);
  }

  // Step 3: Create another pickup
  function handleNewPickup() {
    setAddress("");
    setPlasticType("");
    setQuantity("");
    setDate("");
    setTime("");
    setNotes("");

    setShowReview(false);
    setPickupSubmitted(false);
  }

  return (
    <div className="pickup-container">
      <div className="pickup-card">

        {/* FORM */}
        {!showReview && !pickupSubmitted && (
          <>
            <h1>Request Plastic Pickup</h1>

            <p className="pickup-description">
              Schedule a pickup and turn your plastic waste into value.
            </p>

            <form
              className="pickup-form"
              onSubmit={handleReview}
            >
              <label>Pickup Address</label>

              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your pickup address"
              />

              <label>Plastic Type</label>

              <select
                value={plasticType}
                onChange={(e) => setPlasticType(e.target.value)}
              >
                <option value="">
                  Select plastic type
                </option>

                <option value="PET">PET</option>
                <option value="HDPE">HDPE</option>
                <option value="PVC">PVC</option>
                <option value="LDPE">LDPE</option>
                <option value="PP">PP</option>
                <option value="Other">Other</option>
              </select>

              <label>Quantity (kg)</label>

              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity in kg"
                min="0"
              />

              {estimatedAmount > 0 && (
                <div className="estimated-value">
                  <span>Estimated Value</span>

                  <strong>
                    ₹{estimatedAmount}
                  </strong>
                </div>
              )}

              <label>Preferred Date</label>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <label>Preferred Time</label>

              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="">
                  Select pickup time
                </option>

                <option value="09:00 AM - 11:00 AM">
                  09:00 AM - 11:00 AM
                </option>

                <option value="11:00 AM - 01:00 PM">
                  11:00 AM - 01:00 PM
                </option>

                <option value="02:00 PM - 04:00 PM">
                  02:00 PM - 04:00 PM
                </option>

                <option value="04:00 PM - 06:00 PM">
                  04:00 PM - 06:00 PM
                </option>
              </select>

              <label>Additional Notes</label>

              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any additional information..."
              />

              <button
                className="pickup-button"
                type="submit"
              >
                Review Pickup
              </button>
            </form>
          </>
        )}

        {/* REVIEW */}
        {showReview && !pickupSubmitted && (
          <div className="pickup-review">

            <h1>Review Pickup</h1>

            <p className="pickup-description">
              Please check your pickup details before confirming.
            </p>

            <div className="pickup-summary">

              <h2>Pickup Summary</h2>

              <p>
                <strong>Plastic Type:</strong>{" "}
                {plasticType}
              </p>

              <p>
                <strong>Quantity:</strong>{" "}
                {quantity} kg
              </p>

              <p>
                <strong>Estimated Value:</strong>{" "}
                ₹{estimatedAmount}
              </p>

              <p>
                <strong>Date:</strong>{" "}
                {date}
              </p>

              <p>
                <strong>Time:</strong>{" "}
                {time}
              </p>

              <p>
                <strong>Pickup Address:</strong>{" "}
                {address}
              </p>

              {notes !== "" && (
                <p>
                  <strong>Notes:</strong>{" "}
                  {notes}
                </p>
              )}

            </div>

            <div className="review-buttons">

              <button
                className="edit-button"
                onClick={() => setShowReview(false)}
              >
                Edit Details
              </button>

              <button
                className="pickup-button"
                onClick={handleConfirm}
              >
                Confirm Pickup
              </button>

            </div>

          </div>
        )}

        {/* SUCCESS */}
        {pickupSubmitted && (
          <div className="pickup-success">

            <h1>Pickup Requested!</h1>

            <p>
              Your plastic pickup request has been created successfully.
            </p>

            <div className="pickup-summary">

              <h2>Pickup Details</h2>

              <p>
                <strong>Plastic Type:</strong>{" "}
                {plasticType}
              </p>

              <p>
                <strong>Quantity:</strong>{" "}
                {quantity} kg
              </p>

              <p>
                <strong>Estimated Value:</strong>{" "}
                ₹{estimatedAmount}
              </p>

              <p>
                <strong>Date:</strong>{" "}
                {date}
              </p>

              <p>
                <strong>Time:</strong>{" "}
                {time}
              </p>

              <p>
                <strong>Address:</strong>{" "}
                {address}
              </p>

            </div>

            <p className="pickup-status">
              Status: <strong>Waiting for Collector</strong>
            </p>

            <button
              className="pickup-button"
              onClick={handleNewPickup}
            >
              Create Another Pickup
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default Pickup;