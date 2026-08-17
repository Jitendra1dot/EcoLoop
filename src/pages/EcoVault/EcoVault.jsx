import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EcoVault.css";

function EcoVault() {
  const navigate = useNavigate();

  // Load inventory from localStorage
  const [plasticItems, setPlasticItems] = useState(() => {
    const savedItems = localStorage.getItem("ecoVaultItems");

    if (savedItems) {
      return JSON.parse(savedItems);
    }

    // Default sample inventory
    return [
      {
        id: 1,
        image: null,
        name: "Plastic Water Bottles",
        type: "PET",
        quantity: 2.5,
        unit: "kg",
        description: "",
      },
      {
        id: 2,
        image: null,
        name: "Plastic Containers",
        type: "HDPE",
        quantity: 3,
        unit: "kg",
        description: "",
      },
      {
        id: 3,
        image: null,
        name: "Mixed Plastic Items",
        type: "Mixed / Unsorted",
        quantity: 4,
        unit: "kg",
        description: "",
      },
    ];
  });

  // Save inventory whenever it changes
  useEffect(() => {
    localStorage.setItem(
      "ecoVaultItems",
      JSON.stringify(plasticItems)
    );
  }, [plasticItems]);

  const [showAddForm, setShowAddForm] = useState(false);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // Image selection
  function handleImageChange(e) {
    const file = e.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  }

  // Add plastic
  function handleAddPlastic(e) {
    e.preventDefault();

    if (
      name.trim() === "" ||
      type === "" ||
      quantity === ""
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (Number(quantity) <= 0) {
      alert("Quantity must be greater than 0");
      return;
    }

    const newPlastic = {
      id: Date.now(),
      image: image,
      name: name,
      type: type,
      quantity: Number(quantity),
      unit: "kg",
      description: description,
    };

    setPlasticItems([
      ...plasticItems,
      newPlastic,
    ]);

    // Clear form
    setName("");
    setType("");
    setQuantity("");
    setDescription("");
    setImage(null);

    setShowAddForm(false);

    alert("Plastic added to your EcoVault!");
  }

  // Delete plastic
  function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove this plastic?"
    );

    if (!confirmDelete) {
      return;
    }

    setPlasticItems(
      plasticItems.filter(
        (item) => item.id !== id
      )
    );
  }

  // Total plastic
  const totalPlastic = plasticItems.reduce(
    (total, item) =>
      total + Number(item.quantity),
    0
  );

  return (
    <div className="ecovault-container">

      {/* =========================
          HEADER
      ========================== */}

      <div className="ecovault-header">

        <h1>My EcoVault</h1>

        <p>
          Your personal collection of
          recyclable plastic materials.
        </p>

      </div>


      {/* =========================
          SUMMARY
      ========================== */}

      <div className="ecovault-summary">

        <div className="summary-card">

          <span>
            Total Plastic
          </span>

          <strong>
            {totalPlastic.toFixed(1)} kg
          </strong>

        </div>


        <div className="summary-card">

          <span>
            Plastic Items
          </span>

          <strong>
            {plasticItems.length}
          </strong>

        </div>

      </div>


      {/* =========================
          ADD BUTTON
      ========================== */}

      {!showAddForm && (
        <button
          className="add-plastic-button"
          onClick={() =>
            setShowAddForm(true)
          }
        >
          + Add Plastic
        </button>
      )}


      {/* =========================
          ADD FORM
      ========================== */}

      {showAddForm && (

        <div className="add-plastic-card">

          <div className="form-header">

            <h2>
              Add Plastic
            </h2>

            <button
              className="close-form-button"
              onClick={() =>
                setShowAddForm(false)
              }
            >
              ×
            </button>

          </div>


          <form
            className="plastic-form"
            onSubmit={handleAddPlastic}
          >

            {/* IMAGE */}

            <label>
              Plastic Photo
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />

            {image && (
              <img
                src={image}
                alt="Plastic preview"
                className="plastic-preview"
              />
            )}


            {/* NAME */}

            <label>
              What do you have?
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Example: Plastic bottles"
            />


            {/* TYPE */}

            <label>
              Plastic Type
            </label>

            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value)
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


            {/* QUANTITY */}

            <label>
              Quantity (kg)
            </label>

            <input
              type="number"
              min="0"
              step="0.1"
              value={quantity}
              onChange={(e) =>
                setQuantity(e.target.value)
              }
              placeholder="Example: 2.5"
            />


            {/* DESCRIPTION */}

            <label>
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              placeholder="Describe the plastic items..."
            />


            {/* SAVE */}

            <button
              type="submit"
              className="save-plastic-button"
            >
              Add to EcoVault
            </button>

          </form>

        </div>
      )}


      {/* =========================
          INVENTORY
      ========================== */}

      {!showAddForm && (

        <div className="ecovault-content">

          <h2>
            My Plastic
          </h2>


          {/* EMPTY STATE */}

          {plasticItems.length === 0 ? (

            <div className="empty-vault">

              <div className="empty-icon">
                ♻️
              </div>

              <h3>
                Your EcoVault is empty
              </h3>

              <p>
                Add your recyclable plastic
                to start building your inventory.
              </p>

            </div>

          ) : (

            /* PLASTIC GRID */

            <div className="plastic-grid">

              {plasticItems.map((item) => (

                <div
                  className="plastic-card"
                  key={item.id}
                >

                  {/* IMAGE */}

                  <div className="plastic-card-image">

                    {item.image ? (

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                    ) : (

                      <span>
                        ♻️
                      </span>

                    )}

                  </div>


                  {/* CONTENT */}

                  <div className="plastic-card-content">

                    <span className="plastic-type">
                      {item.type}
                    </span>

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      Quantity:{" "}
                      <strong>
                        {item.quantity}{" "}
                        {item.unit}
                      </strong>
                    </p>


                    {/* DESCRIPTION */}

                    {item.description && (
                      <p className="plastic-description">
                        {item.description}
                      </p>
                    )}


                    {/* ACTIONS */}

                    <div className="plastic-card-actions">

                      {/* USE */}

                      <button
                        className="use-button"
                        onClick={() =>
                          alert(
                            "This plastic can later be used for a customized product."
                          )
                        }
                      >
                        Use
                      </button>


                      {/* SELL */}

                      <button
                        className="sell-button"
                        onClick={() => {

                          navigate("/pickup", {
                            state: {
                              plasticId: item.id,
                            },
                          });

                        }}
                      >
                        Sell
                      </button>


                      {/* DELETE */}

                      <button
                        className="delete-button"
                        onClick={() =>
                          handleDelete(item.id)
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      )}

    </div>
  );
}

export default EcoVault;