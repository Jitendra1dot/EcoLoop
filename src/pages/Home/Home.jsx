import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">

      {/* ================= HERO ================= */}
      <section className="hero-section">
        <div className="hero-content">

          <div className="hero-text">
            <span className="hero-tag">♻️ THE PLASTIC CIRCULAR ECONOMY</span>

            <h1>
              Give Plastic Waste
              <span> Another Life.</span>
            </h1>

            <p>
              EcoLoop connects people, plastic collectors, recyclers and
              manufacturers to turn plastic waste into value and useful
              products.
            </p>

            <div className="hero-buttons">
              <Link to="/pickup" className="primary-btn">
                Request a Pickup
              </Link>

              <Link to="/marketplace" className="secondary-btn">
                Explore Products
              </Link>
            </div>

            <div className="hero-trust">
              <div>
                <strong>♻️</strong>
                <span>Recycle Plastic</span>
              </div>

              <div>
                <strong>💰</strong>
                <span>Earn From Waste</span>
              </div>

              <div>
                <strong>🌱</strong>
                <span>Build Sustainably</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-circle"></div>

            <img
              src="/EcoLoop/ecoloop-logo.png"
              alt="EcoLoop"
              className="home-logo"
            />

            <div className="floating-card plastic-card">
              <span className="floating-icon">♻️</span>
              <div>
                <strong>Plastic Recycled</strong>
                <small>Give waste a second life</small>
              </div>
            </div>

            <div className="floating-card earn-card">
              <span className="floating-icon">₹</span>
              <div>
                <strong>Earn From Plastic</strong>
                <small>Sell your recyclable waste</small>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="intro-section">
        <span className="section-tag">WHAT IS ECOLOOP?</span>

        <h2>
          One platform for the
          <span> entire plastic journey.</span>
        </h2>

        <p>
          From the moment plastic waste leaves your home to the moment it
          becomes a new product, EcoLoop helps connect every part of the
          recycling ecosystem.
        </p>
      </section>


      {/* ================= SERVICES ================= */}
      <section className="services-section">

        <div className="service-card pickup-card">
          <div className="service-icon">🚛</div>

          <span className="card-number">01</span>

          <h3>Sell & Request Pickup</h3>

          <p>
            Have plastic waste at home? Request a pickup just like booking
            a ride. A nearby collector can collect your plastic and you get
            paid for it.
          </p>

          <Link to="/pickup">Request Pickup →</Link>
        </div>


        <div className="service-card vault-card">
          <div className="service-icon">♻️</div>

          <span className="card-number">02</span>

          <h3>Manage Your EcoVault</h3>

          <p>
            Keep track of the plastic you own. Store its type and quantity
            and use it later when you want to create or purchase products.
          </p>

          <Link to="/ecovault">Open EcoVault →</Link>
        </div>


        <div className="service-card marketplace-card">
          <div className="service-icon">🛍️</div>

          <span className="card-number">03</span>

          <h3>Buy Recycled Products</h3>

          <p>
            Discover products made from recycled plastic or choose a
            predefined design and see exactly what plastic it requires.
          </p>

          <Link to="/marketplace">Explore Marketplace →</Link>
        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="how-section">

        <div className="section-heading">
          <span className="section-tag">HOW IT WORKS</span>

          <h2>
            From waste to
            <span> something useful.</span>
          </h2>

          <p>
            EcoLoop creates a simple connection between plastic owners,
            collectors, recycling units and manufacturers.
          </p>
        </div>


        <div className="process">

          <div className="process-step">
            <div className="process-number">01</div>

            <div className="process-icon">👤</div>

            <h3>You have plastic</h3>

            <p>
              Keep recyclable plastic in your EcoVault or request a pickup
              when you are ready to sell it.
            </p>
          </div>


          <div className="process-line"></div>


          <div className="process-step">
            <div className="process-number">02</div>

            <div className="process-icon">🚛</div>

            <h3>Collector picks it up</h3>

            <p>
              A registered collection owner can accept the request and
              collect the plastic from your location.
            </p>
          </div>


          <div className="process-line"></div>


          <div className="process-step">
            <div className="process-number">03</div>

            <div className="process-icon">🏭</div>

            <h3>Plastic gets recycled</h3>

            <p>
              Collected plastic can move through collection and recycling
              units where it is processed into usable material.
            </p>
          </div>


          <div className="process-line"></div>


          <div className="process-step">
            <div className="process-number">04</div>

            <div className="process-icon">🪑</div>

            <h3>New products are created</h3>

            <p>
              Manufacturers can turn recycled material into useful products
              that can come back into the EcoLoop marketplace.
            </p>
          </div>

        </div>
      </section>


      {/* ================= CUSTOM PRODUCT ================= */}
      <section className="custom-section">

        <div className="custom-content">

          <span className="section-tag">SMARTER RECYCLING</span>

          <h2>
            Your plastic can become
            <span> something you actually want.</span>
          </h2>

          <p>
            Choose a product design and EcoLoop can show the type and amount
            of plastic needed to make it.
          </p>

          <div className="custom-features">

            <div>
              <span>✓</span>
              <p>See the required plastic type</p>
            </div>

            <div>
              <span>✓</span>
              <p>Check the quantity you already own</p>
            </div>

            <div>
              <span>✓</span>
              <p>Find additional plastic when needed</p>
            </div>

          </div>

          <Link to="/marketplace" className="custom-btn">
            Explore Custom Products →
          </Link>

        </div>


        <div className="custom-visual">

          <div className="product-preview">

            <div className="product-top">
              <span>PREDEFINED DESIGN</span>
              <span>♻️</span>
            </div>

            <div className="product-shape">
              <div className="chair-seat"></div>
              <div className="chair-back"></div>
              <div className="chair-leg leg-one"></div>
              <div className="chair-leg leg-two"></div>
            </div>

            <h3>Recycled Chair</h3>

            <div className="material-row">
              <span>PET Plastic</span>
              <strong>4 kg</strong>
            </div>

            <div className="material-row">
              <span>HDPE Plastic</span>
              <strong>2 kg</strong>
            </div>

            <div className="material-total">
              <span>Total Required</span>
              <strong>6 kg</strong>
            </div>

          </div>

        </div>

      </section>


      {/* ================= ECOSYSTEM ================= */}
      <section className="ecosystem-section">

        <div className="section-heading">
          <span className="section-tag">THE ECOLOOP ECOSYSTEM</span>

          <h2>
            Every piece of plastic
            <span> has a journey.</span>
          </h2>

          <p>
            EcoLoop brings together the people and businesses that keep
            plastic moving through the circular economy.
          </p>
        </div>


        <div className="ecosystem-flow">

          <div className="eco-node">
            <div className="eco-node-icon">👤</div>
            <h3>Users</h3>
            <p>Sell plastic waste</p>
          </div>

          <div className="eco-arrow">→</div>

          <div className="eco-node">
            <div className="eco-node-icon">🚛</div>
            <h3>Collectors</h3>
            <p>Collect & sort plastic</p>
          </div>

          <div className="eco-arrow">→</div>

          <div className="eco-node">
            <div className="eco-node-icon">♻️</div>
            <h3>Recyclers</h3>
            <p>Process the material</p>
          </div>

          <div className="eco-arrow">→</div>

          <div className="eco-node">
            <div className="eco-node-icon">🏭</div>
            <h3>Manufacturers</h3>
            <p>Create new products</p>
          </div>

          <div className="eco-arrow">→</div>

          <div className="eco-node">
            <div className="eco-node-icon">🛍️</div>
            <h3>Products</h3>
            <p>Back to consumers</p>
          </div>

        </div>

      </section>


      {/* ================= IMPACT ================= */}
      <section className="impact-section">

        <div className="impact-header">
          <span className="section-tag">WHY ECOLOOP?</span>

          <h2>
            Small actions can create
            <span> a bigger impact.</span>
          </h2>
        </div>


        <div className="impact-grid">

          <div className="impact-card">
            <span>♻️</span>
            <strong>Recycle More</strong>
            <p>
              Make it easier to send plastic waste into the recycling
              ecosystem.
            </p>
          </div>

          <div className="impact-card">
            <span>💰</span>
            <strong>Earn From Waste</strong>
            <p>
              Give users an incentive to collect and sell recyclable plastic.
            </p>
          </div>

          <div className="impact-card">
            <span>🤝</span>
            <strong>Connect People</strong>
            <p>
              Connect plastic owners with collection businesses and
              manufacturers.
            </p>
          </div>

          <div className="impact-card">
            <span>🌱</span>
            <strong>Support Circularity</strong>
            <p>
              Help keep materials in use instead of letting them become
              waste.
            </p>
          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="final-cta">

        <div>
          <span className="section-tag">START YOUR LOOP</span>

          <h2>
            Have plastic?
            <span> Don't throw it away.</span>
          </h2>

          <p>
            Turn your recyclable waste into value and help create a cleaner,
            more circular future.
          </p>

          <Link to="/pickup" className="cta-button">
            Request Your First Pickup →
          </Link>
        </div>

      </section>

    </div>
  );
}

export default Home;