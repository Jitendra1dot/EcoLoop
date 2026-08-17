import { useState } from "react";
import "./Marketplace.css";

function Marketplace() {
  const [showCustomization, setShowCustomization] = useState(false);
  const [customizationType, setCustomizationType] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedDesign, setSelectedDesign] = useState(null);

  const [uploadedDesign, setUploadedDesign] = useState(null);
  const [designDescription, setDesignDescription] = useState("");

  const products = [
    {
      id: 1,
      name: "Recycled Plastic Chair",
      price: 899,
      category: "Furniture",
      manufacturer: "EcoCraft",
      description: "Durable chair made using recycled plastic.",
      image: "🪑",
    },
    {
      id: 2,
      name: "Eco Storage Box",
      price: 499,
      category: "Home",
      manufacturer: "GreenWorks",
      description: "Storage box made from recycled plastic.",
      image: "📦",
    },
    {
      id: 3,
      name: "Recycled Plastic Table",
      price: 1299,
      category: "Furniture",
      manufacturer: "ReNew Plastics",
      description: "Strong and eco-friendly recycled plastic table.",
      image: "🪵",
    },
    {
      id: 4,
      name: "Eco Planter",
      price: 299,
      category: "Garden",
      manufacturer: "GreenWorks",
      description: "Plant pot created using recycled plastic.",
      image: "🪴",
    },
  ];

  const designs = [
    {
      id: 1,
      name: "Modern Chair",
      manufacturer: "EcoCraft",
      price: 999,
      plasticRequired: 6,
      image: "🪑",
    },
    {
      id: 2,
      name: "Minimal Chair",
      manufacturer: "ReNew Plastics",
      price: 1099,
      plasticRequired: 7,
      image: "🪑",
    },
    {
      id: 3,
      name: "Classic Chair",
      manufacturer: "GreenWorks",
      price: 899,
      plasticRequired: 5,
      image: "🪑",
    },
  ];

  function handleCustomize(product) {
    setSelectedProduct(product);
    setShowCustomization(true);
    setCustomizationType("");
    setSelectedDesign(null);
    setUploadedDesign(null);
    setDesignDescription("");
  }

  function handleBackToStore() {
    setShowCustomization(false);
    setCustomizationType("");
    setSelectedProduct(null);
    setSelectedDesign(null);
    setUploadedDesign(null);
    setDesignDescription("");
  }

  function handleBuy(product) {
    alert(
      `${product.name} selected for purchase.`
    );
  }

  function handleUpload(e) {
    const file = e.target.files[0];

    if (file) {
      setUploadedDesign(file);
    }
  }

  function handleSubmitDesign() {
    if (!uploadedDesign) {
      alert("Please upload your design first.");
      return;
    }

    alert(
      "Your design has been submitted for manufacturer approval."
    );
  }

  return (
    <div className="marketplace-container">

      {/* =========================
          STORE
      ========================== */}

      <div
        className={
          showCustomization
            ? "marketplace-panel store-panel slide-left"
            : "marketplace-panel store-panel"
        }
      >

        <div className="marketplace-header">

          <h1>
            EcoLoop Marketplace
          </h1>

          <p>
            Buy existing products or customize
            something of your own.
          </p>

        </div>


        <div className="marketplace-tabs">

          <button className="active">
            🛍️ Store
          </button>

          <button
            onClick={() => {
              setShowCustomization(true);
              setSelectedProduct(null);
              setCustomizationType("");
            }}
          >
            🎨 Customize
          </button>

        </div>


        <div className="product-grid">

          {products.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              <div className="product-image">
                {product.image}
              </div>


              <div className="product-content">

                <span className="product-category">
                  {product.category}
                </span>

                <h2>
                  {product.name}
                </h2>

                <p className="manufacturer-name">
                  By {product.manufacturer}
                </p>

                <p>
                  {product.description}
                </p>


                <div className="product-bottom">

                  <strong>
                    ₹{product.price}
                  </strong>

                  <div className="product-buttons">

                    <button
                      className="buy-button"
                      onClick={() =>
                        handleBuy(product)
                      }
                    >
                      Buy Now
                    </button>

                    <button
                      className="customize-button"
                      onClick={() =>
                        handleCustomize(product)
                      }
                    >
                      Customize
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* =========================
          CUSTOMIZATION
      ========================== */}

      <div
        className={
          showCustomization
            ? "marketplace-panel customization-panel slide-in"
            : "marketplace-panel customization-panel"
        }
      >

        <button
          className="back-store-button"
          onClick={handleBackToStore}
        >
          ← Back to Store
        </button>


        <div className="customization-header">

          <h1>
            Customize Your Product
          </h1>

          {selectedProduct && (
            <p>
              Customizing{" "}
              <strong>
                {selectedProduct.name}
              </strong>
            </p>
          )}

        </div>


        {/* =========================
            CHOOSE CUSTOMIZATION TYPE
        ========================== */}

        {customizationType === "" && (

          <div className="customization-choice">

            <h2>
              How would you like to customize?
            </h2>

            <div className="customization-choice-grid">

              <button
                onClick={() =>
                  setCustomizationType("predesigned")
                }
              >

                <span>
                  🎨
                </span>

                <strong>
                  Pre-designed
                </strong>

                <small>
                  Choose a design created by
                  our manufacturers.
                </small>

              </button>


              <button
                onClick={() =>
                  setCustomizationType("upload")
                }
              >

                <span>
                  📤
                </span>

                <strong>
                  Upload My Design
                </strong>

                <small>
                  Upload your own design for
                  manufacturer approval.
                </small>

              </button>

            </div>

          </div>

        )}


        {/* =========================
            PRE-DESIGNED
        ========================== */}

        {customizationType === "predesigned" && (

          <div className="design-section">

            <h2>
              Choose a Pre-designed Product
            </h2>

            <p className="section-description">
              Select a design from one of our
              manufacturers.
            </p>


            <div className="design-grid">

              {designs.map((design) => (

                <div
                  className={
                    selectedDesign &&
                    selectedDesign.id === design.id
                      ? "design-card selected"
                      : "design-card"
                  }
                  key={design.id}
                >

                  <div className="design-image">
                    {design.image}
                  </div>


                  <div className="design-info">

                    <span>
                      {design.manufacturer}
                    </span>

                    <h3>
                      {design.name}
                    </h3>

                    <p>
                      Plastic required:{" "}
                      <strong>
                        {design.plasticRequired} kg
                      </strong>
                    </p>

                    <strong className="design-price">
                      ₹{design.price}
                    </strong>


                    <button
                      onClick={() =>
                        setSelectedDesign(design)
                      }
                    >
                      {selectedDesign &&
                      selectedDesign.id === design.id
                        ? "Selected ✓"
                        : "Select Design"}
                    </button>

                  </div>

                </div>

              ))}

            </div>


            {selectedDesign && (

              <div className="material-section">

                <h2>
                  Plastic Requirement
                </h2>

                <p>
                  This design requires{" "}
                  <strong>
                    {selectedDesign.plasticRequired} kg
                  </strong>{" "}
                  of plastic.
                </p>


                <div className="material-options">

                  <button
                    onClick={() =>
                      alert(
                        "EcoVault connection will be added next."
                      )
                    }
                  >
                    <span>♻️</span>

                    <strong>
                      Use My EcoVault
                    </strong>

                    <small>
                      Use your existing plastic.
                    </small>
                  </button>


                  <button
                    onClick={() =>
                      alert(
                        "Community plastic marketplace will be added next."
                      )
                    }
                  >
                    <span>🤝</span>

                    <strong>
                      Buy from Community
                    </strong>

                    <small>
                      Source plastic from other users.
                    </small>
                  </button>


                  <button
                    onClick={() =>
                      alert(
                        "Payment option will be added next."
                      )
                    }
                  >
                    <span>💰</span>

                    <strong>
                      Pay for Plastic
                    </strong>

                    <small>
                      Pay for the required material.
                    </small>
                  </button>

                </div>

              </div>

            )}

          </div>

        )}


        {/* =========================
            UPLOAD DESIGN
        ========================== */}

        {customizationType === "upload" && (

          <div className="upload-design-section">

            <h2>
              Upload Your Own Design
            </h2>

            <p className="section-description">
              Upload your design and let
              manufacturers review it.
            </p>


            <div className="upload-box">

              <div className="upload-icon">
                📤
              </div>

              <h3>
                Upload Design
              </h3>

              <p>
                JPG, PNG or PDF
              </p>

              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleUpload}
              />

              {uploadedDesign && (

                <p className="uploaded-file">
                  ✓ {uploadedDesign.name}
                </p>

              )}

            </div>


            <label>
              Describe your design
            </label>

            <textarea
              value={designDescription}
              onChange={(e) =>
                setDesignDescription(
                  e.target.value
                )
              }
              placeholder="Explain how you want the product to look..."
            />


            <div className="material-section">

              <h2>
                After Manufacturer Approval
              </h2>

              <p>
                Once a manufacturer approves your
                design, you can choose how to provide
                the required plastic.
              </p>


              <div className="material-options">

                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "EcoVault connection will be added next."
                    )
                  }
                >
                  <span>♻️</span>

                  <strong>
                    Use My EcoVault
                  </strong>

                  <small>
                    Use your existing plastic.
                  </small>
                </button>


                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "Community plastic marketplace will be added next."
                    )
                  }
                >
                  <span>🤝</span>

                  <strong>
                    Buy from Community
                  </strong>

                  <small>
                    Buy plastic from other users.
                  </small>
                </button>


                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "Payment option will be added next."
                    )
                  }
                >
                  <span>💰</span>

                  <strong>
                    Pay for Plastic
                  </strong>

                  <small>
                    Pay for the required material.
                  </small>
                </button>

              </div>

            </div>


            <button
              className="submit-design-button"
              onClick={handleSubmitDesign}
            >
              Submit for Manufacturer Approval
            </button>

          </div>

        )}

      </div>

    </div>
  );
}

export default Marketplace;