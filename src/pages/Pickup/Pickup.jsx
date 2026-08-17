import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Pickup.css";

function Pickup() {
  const location = useLocation();

  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");

  const [pickupSource, setPickupSource] = useState("");

  const [selectedVaultPlastic, setSelectedVaultPlastic] =
    useState("");

  const [vaultQuantity, setVaultQuantity] =
    useState("");

  const [manualPlasticType, setManualPlasticType] =
    useState("");

  const [manualQuantity, setManualQuantity] =
    useState("");

  const [showReview, setShowReview] = useState(false);
  const [pickupSubmitted, setPickupSubmitted] = useState(false);

  /*
    Get EcoVault items from localStorage
  */
  const vaultItems = JSON.parse(
    localStorage.getItem("ecoVaultItems") || "[]"
  );

  /*
    Find the selected EcoVault item
  */
  const selectedVaultItem = vaultItems.find(
    (item) =>
      String(item.id) === String(selectedVaultPlastic)
  );

  /*
    If user clicked Sell from EcoVault,
    automatically select that item.
  */
  useEffect(() => {
    const plasticId = location.state?.plasticId;

    if (plasticId) {
      const item = vaultItems.find(
        (vaultItem) =>
          String(vaultItem.id) === String(plasticId)
      );

      if (item) {
        setPickupSource("vault");
        setSelectedVaultPlastic(String(item.id));
        setVaultQuantity("");
      }
    }
  }, [location.state?.plasticId]);

  /*
    Plastic rates per kg
  */
  const plasticRates = {
    PET: 30,
    HDPE: 35,
    PVC: 25,
    LDPE: 20,
    PP: 28,
    "Mixed / Unsorted": 15,
    Other: 15,
  };

  /*
    EcoVault quantity
  */
  const vaultQty =
    pickupSource === "vault" ||
    pickupSource === "both"
      ? Number(vaultQuantity) || 0
      : 0;

  /*
    Manual quantity
  */
  const manualQty =
    pickupSource === "manual" ||
    pickupSource === "both"
      ? Number(manualQuantity) || 0
      : 0;

  /*
    Total pickup quantity

    Example:

    EcoVault = 3 kg
    Manual   = 5 kg

    Total = 8 kg
  */
  const totalQuantity = vaultQty + manualQty;

  /*
    EcoVault estimated value
  */
  const vaultValue =
    selectedVaultItem && vaultQty > 0
      ? vaultQty *
        (plasticRates[selectedVaultItem.type] || 0)
      : 0;

  /*
    Manual estimated value
  */
  const manualValue =
    manualPlasticType && manualQty > 0
      ? manualQty *
        (plasticRates[manualPlasticType] || 0)
      : 0;

  /*
    Total estimated value
  */
  const estimatedAmount =
    vaultValue + manualValue;

  /*
    Change pickup source
  */
  function handleSourceChange(source) {
    setPickupSource(source);

    setSelectedVaultPlastic("");
    setVaultQuantity("");

    setManualPlasticType("");
    setManualQuantity("");
  }

  /*
    Select EcoVault plastic
  */
  function handleVaultPlasticChange(e) {
    const value = e.target.value;

    setSelectedVaultPlastic(value);

    /*
      Reset quantity when changing item.
    */
    setVaultQuantity("");
  }

  /*
    Review Pickup
  */
  function handleReview(e) {
    e.preventDefault();

    /*
      Basic validation
    */
    if (
      pickupSource === "" ||
      address.trim() === "" ||
      date === "" ||
      time === ""
    ) {
      alert("Please fill all required fields");
      return;
    }

    /*
      EcoVault validation
    */
    if (
      pickupSource === "vault" ||
      pickupSource === "both"
    ) {
      if (selectedVaultPlastic === "") {
        alert(
          "Please select plastic from your EcoVault"
        );
        return;
      }

      if (vaultQuantity === "") {
        alert(
          "Please enter the EcoVault quantity"
        );
        return;
      }

      if (Number(vaultQuantity) <= 0) {
        alert(
          "EcoVault quantity must be greater than 0"
        );
        return;
      }

      if (!selectedVaultItem) {
        alert(
          "Selected EcoVault item was not found"
        );
        return;
      }

      if (
        Number(vaultQuantity) >
        Number(selectedVaultItem.quantity)
      ) {
        alert(
          `You only have ${selectedVaultItem.quantity} kg available in your EcoVault`
        );
        return;
      }
    }

    /*
      Manual validation
    */
    if (
      pickupSource === "manual" ||
      pickupSource === "both"
    ) {
      if (manualPlasticType === "") {
        alert(
          "Please select the manual plastic type"
        );
        return;
      }

      if (manualQuantity === "") {
        alert(
          "Please enter the manual quantity"
        );
        return;
      }

      if (Number(manualQuantity) <= 0) {
        alert(
          "Manual quantity must be greater than 0"
        );
        return;
      }
    }

    /*
      Total quantity validation
    */
    if (totalQuantity <= 0) {
      alert(
        "Pickup quantity must be greater than 0"
      );
      return;
    }

    setShowReview(true);
  }

  /*
    Confirm pickup
  */
  function handleConfirm() {
    console.log(
      "Pickup Source:",
      pickupSource
    );

    console.log(
      "EcoVault Item:",
      selectedVaultItem
    );

    console.log(
      "EcoVault Quantity:",
      vaultQty
    );

    console.log(
      "Manual Plastic Type:",
      manualPlasticType
    );

    console.log(
      "Manual Quantity:",
      manualQty
    );

    console.log(
      "Total Quantity:",
      totalQuantity
    );

    console.log(
      "Estimated Amount:",
      estimatedAmount
    );

    console.log(
      "Pickup Address:",
      address
    );

    console.log(
      "Date:",
      date
    );

    console.log(
      "Time:",
      time
    );

    console.log(
      "Notes:",
      notes
    );

    setPickupSubmitted(true);
  }

  /*
    Create another pickup
  */
  function handleNewPickup() {
    setAddress("");
    setDate("");
    setTime("");
    setNotes("");

    setPickupSource("");

    setSelectedVaultPlastic("");
    setVaultQuantity("");

    setManualPlasticType("");
    setManualQuantity("");

    setShowReview(false);
    setPickupSubmitted(false);
  }

  return (
    <div className="pickup-container">

      <div className="pickup-card">

        {/* =========================================
            FORM
        ========================================== */}

        {!showReview && !pickupSubmitted && (
          <>
            <h1>
              Request Plastic Pickup
            </h1>

            <p className="pickup-description">
              Schedule a pickup and turn your
              plastic waste into value.
            </p>

            <form
              className="pickup-form"
              onSubmit={handleReview}
            >

              {/* =================================
                  PICKUP SOURCE
              ================================= */}

              <label>
                How would you like to provide
                the plastic?
              </label>

              <div className="pickup-source-options">

                {/* ECO VAULT */}

                <button
                  type="button"
                  className={
                    pickupSource === "vault"
                      ? "pickup-source-button active"
                      : "pickup-source-button"
                  }
                  onClick={() =>
                    handleSourceChange("vault")
                  }
                >
                  <span>♻️</span>

                  <strong>
                    My EcoVault
                  </strong>

                  <small>
                    Use plastic from EcoVault
                  </small>
                </button>


                {/* MANUAL */}

                <button
                  type="button"
                  className={
                    pickupSource === "manual"
                      ? "pickup-source-button active"
                      : "pickup-source-button"
                  }
                  onClick={() =>
                    handleSourceChange("manual")
                  }
                >
                  <span>📦</span>

                  <strong>
                    Manual
                  </strong>

                  <small>
                    Add plastic manually
                  </small>
                </button>


                {/* BOTH */}

                <button
                  type="button"
                  className={
                    pickupSource === "both"
                      ? "pickup-source-button active"
                      : "pickup-source-button"
                  }
                  onClick={() =>
                    handleSourceChange("both")
                  }
                >
                  <span>🔄</span>

                  <strong>
                    Both
                  </strong>

                  <small>
                    EcoVault + Manual
                  </small>
                </button>

              </div>


              {/* =================================
                  ECOVAULT SECTION
              ================================= */}

              {(pickupSource === "vault" ||
                pickupSource === "both") && (

                <div className="pickup-section">

                  <h3>
                    ♻️ Plastic from My EcoVault
                  </h3>

                  <label>
                    Select Plastic
                  </label>

                  <select
                    value={selectedVaultPlastic}
                    onChange={
                      handleVaultPlasticChange
                    }
                  >

                    <option value="">
                      Select plastic from EcoVault
                    </option>

                    {vaultItems.map((item) => (
                      <option
                        key={item.id}
                        value={item.id}
                      >
                        {item.name} —{" "}
                        {item.quantity} kg
                      </option>
                    ))}

                  </select>


                  {/* AVAILABLE QUANTITY */}

                  {selectedVaultItem && (
                    <div className="available-plastic">

                      <span>
                        Available in EcoVault
                      </span>

                      <strong>
                        {selectedVaultItem.quantity} kg
                      </strong>

                    </div>
                  )}


                  {/* QUANTITY */}

                  <label>
                    Quantity from EcoVault (kg)
                  </label>

                  <input
                    type="number"
                    value={vaultQuantity}
                    onChange={(e) =>
                      setVaultQuantity(
                        e.target.value
                      )
                    }
                    placeholder="Enter quantity"
                    min="0"
                    step="0.1"
                    max={
                      selectedVaultItem
                        ? selectedVaultItem.quantity
                        : undefined
                    }
                  />

                  {selectedVaultItem && (
                    <small className="quantity-help">
                      Maximum available:{" "}
                      {selectedVaultItem.quantity} kg
                    </small>
                  )}

                </div>
              )}


              {/* =================================
                  MANUAL SECTION
              ================================= */}

              {(pickupSource === "manual" ||
                pickupSource === "both") && (

                <div className="pickup-section">

                  <h3>
                    📦 Manual Plastic
                  </h3>

                  <label>
                    Plastic Type
                  </label>

                  <select
                    value={manualPlasticType}
                    onChange={(e) =>
                      setManualPlasticType(
                        e.target.value
                      )
                    }
                  >

                    <option value="">
                      Select plastic type
                    </option>

                    <option value="PET">
                      PET
                    </option>

                    <option value="HDPE">
                      HDPE
                    </option>

                    <option value="PVC">
                      PVC
                    </option>

                    <option value="LDPE">
                      LDPE
                    </option>

                    <option value="PP">
                      PP
                    </option>

                    <option value="Mixed / Unsorted">
                      Mixed / Unsorted Plastic
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>


                  <label>
                    Manual Quantity (kg)
                  </label>

                  <input
                    type="number"
                    value={manualQuantity}
                    onChange={(e) =>
                      setManualQuantity(
                        e.target.value
                      )
                    }
                    placeholder="Enter quantity in kg"
                    min="0"
                    step="0.1"
                  />

                </div>
              )}


              {/* =================================
                  TOTAL
              ================================= */}

              {pickupSource !== "" &&
                totalQuantity > 0 && (

                <div className="pickup-total">

                  <div>

                    <span>
                      Total Pickup Quantity
                    </span>

                    <strong>
                      {totalQuantity} kg
                    </strong>

                  </div>

                  <div>

                    <span>
                      Estimated Value
                    </span>

                    <strong>
                      ₹{estimatedAmount}
                    </strong>

                  </div>

                </div>
              )}


              {/* =================================
                  ADDRESS
              ================================= */}

              <label>
                Pickup Address
              </label>

              <textarea
                value={address}
                onChange={(e) =>
                  setAddress(e.target.value)
                }
                placeholder="Enter your pickup address"
              />


              {/* =================================
                  DATE
              ================================= */}

              <label>
                Preferred Date
              </label>

              <input
                type="date"
                value={date}
                onChange={(e) =>
                  setDate(e.target.value)
                }
              />


              {/* =================================
                  TIME
              ================================= */}

              <label>
                Preferred Time
              </label>

              <select
                value={time}
                onChange={(e) =>
                  setTime(e.target.value)
                }
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


              {/* =================================
                  NOTES
              ================================= */}

              <label>
                Additional Notes
              </label>

              <textarea
                value={notes}
                onChange={(e) =>
                  setNotes(e.target.value)
                }
                placeholder="Any additional information..."
              />


              {/* =================================
                  REVIEW BUTTON
              ================================= */}

              <button
                className="pickup-button"
                type="submit"
              >
                Review Pickup
              </button>

            </form>
          </>
        )}


        {/* =========================================
            REVIEW
        ========================================== */}

        {showReview && !pickupSubmitted && (

          <div className="pickup-review">

            <h1>
              Review Pickup
            </h1>

            <p className="pickup-description">
              Please check your pickup details
              before confirming.
            </p>


            <div className="pickup-summary">

              <h2>
                Pickup Summary
              </h2>


              {/* SOURCE */}

              <p>
                <strong>
                  Pickup Source:
                </strong>{" "}

                {pickupSource === "vault"
                  ? "My EcoVault"
                  : pickupSource === "manual"
                  ? "Manual"
                  : "EcoVault + Manual"}
              </p>


              {/* ECOVAULT */}

              {(pickupSource === "vault" ||
                pickupSource === "both") && (
                <>
                  <p>
                    <strong>
                      EcoVault Plastic:
                    </strong>{" "}

                    {selectedVaultItem?.name}
                  </p>

                  <p>
                    <strong>
                      EcoVault Type:
                    </strong>{" "}

                    {selectedVaultItem?.type}
                  </p>

                  <p>
                    <strong>
                      EcoVault Quantity:
                    </strong>{" "}

                    {vaultQty} kg
                  </p>
                </>
              )}


              {/* MANUAL */}

              {(pickupSource === "manual" ||
                pickupSource === "both") && (
                <>
                  <p>
                    <strong>
                      Manual Plastic Type:
                    </strong>{" "}

                    {manualPlasticType}
                  </p>

                  <p>
                    <strong>
                      Manual Quantity:
                    </strong>{" "}

                    {manualQty} kg
                  </p>
                </>
              )}


              {/* TOTAL */}

              <p>
                <strong>
                  Total Quantity:
                </strong>{" "}

                {totalQuantity} kg
              </p>


              {/* VALUE */}

              <p>
                <strong>
                  Estimated Value:
                </strong>{" "}

                ₹{estimatedAmount}
              </p>


              {/* DATE */}

              <p>
                <strong>
                  Date:
                </strong>{" "}

                {date}
              </p>


              {/* TIME */}

              <p>
                <strong>
                  Time:
                </strong>{" "}

                {time}
              </p>


              {/* ADDRESS */}

              <p>
                <strong>
                  Pickup Address:
                </strong>{" "}

                {address}
              </p>


              {/* NOTES */}

              {notes !== "" && (
                <p>
                  <strong>
                    Notes:
                  </strong>{" "}

                  {notes}
                </p>
              )}

            </div>


            {/* BUTTONS */}

            <div className="review-buttons">

              <button
                className="edit-button"
                onClick={() =>
                  setShowReview(false)
                }
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


        {/* =========================================
            SUCCESS
        ========================================== */}

        {pickupSubmitted && (

          <div className="pickup-success">

            <h1>
              Pickup Requested!
            </h1>

            <p>
              Your plastic pickup request has
              been created successfully.
            </p>


            <div className="pickup-summary">

              <h2>
                Pickup Details
              </h2>


              {/* SOURCE */}

              <p>
                <strong>
                  Pickup Source:
                </strong>{" "}

                {pickupSource === "vault"
                  ? "My EcoVault"
                  : pickupSource === "manual"
                  ? "Manual"
                  : "EcoVault + Manual"}
              </p>


              {/* ECOVAULT */}

              {(pickupSource === "vault" ||
                pickupSource === "both") && (
                <>
                  <p>
                    <strong>
                      EcoVault Plastic:
                    </strong>{" "}

                    {selectedVaultItem?.name}
                  </p>

                  <p>
                    <strong>
                      EcoVault Type:
                    </strong>{" "}

                    {selectedVaultItem?.type}
                  </p>

                  <p>
                    <strong>
                      EcoVault Quantity:
                    </strong>{" "}

                    {vaultQty} kg
                  </p>
                </>
              )}


              {/* MANUAL */}

              {(pickupSource === "manual" ||
                pickupSource === "both") && (
                <>
                  <p>
                    <strong>
                      Manual Plastic Type:
                    </strong>{" "}

                    {manualPlasticType}
                  </p>

                  <p>
                    <strong>
                      Manual Quantity:
                    </strong>{" "}

                    {manualQty} kg
                  </p>
                </>
              )}


              {/* TOTAL */}

              <p>
                <strong>
                  Total Quantity:
                </strong>{" "}

                {totalQuantity} kg
              </p>


              {/* VALUE */}

              <p>
                <strong>
                  Estimated Value:
                </strong>{" "}

                ₹{estimatedAmount}
              </p>


              {/* DATE */}

              <p>
                <strong>
                  Date:
                </strong>{" "}

                {date}
              </p>


              {/* TIME */}

              <p>
                <strong>
                  Time:
                </strong>{" "}

                {time}
              </p>


              {/* ADDRESS */}

              <p>
                <strong>
                  Address:
                </strong>{" "}

                {address}
              </p>

            </div>


            {/* STATUS */}

            <p className="pickup-status">

              Status:{" "}

              <strong>
                Waiting for Collector
              </strong>

            </p>


            {/* NEW PICKUP */}

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