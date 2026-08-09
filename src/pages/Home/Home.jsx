import {Link} from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="/ecoloop-logo.png"
          alt="EcoLoop Logo"
           className="home-logo"
          />

        <h1>Turn Plastic Waste Into Value.</h1>

        <p>
          Sell your plastic, support recycling, and discover
          products made from recycled materials.
        </p>

        <div className="hero-buttons">
          <Link to="/pickup">Request Pickup</Link>
          <Link to="/marketplace">Explore Marketplace</Link>
        </div>
      </section>


      {/* How It Works */}
      <section className="how-section">
        <h2>How EcoLoop Works</h2>

        <div className="steps">
          <div>
            <h3>1. Collect</h3>
            <p>Schedule a pickup for your plastic waste.</p>
          </div>

          <div>
            <h3>2. Recycle</h3>
            <p>Your plastic is sent for recycling.</p>
          </div>

          <div>
            <h3>3. Create</h3>
            <p>Recycled plastic becomes useful products.</p>
          </div>
        </div>
      </section>


      {/* Why EcoLoop */}
      <section className="why-section">
        <h2>Why EcoLoop?</h2>

        <div className="benefits">

          <div>
            <h3>♻️ Recycle</h3>
            <p>Help reduce plastic waste.</p>
          </div>

          <div>
            <h3>💰 Earn</h3>
            <p>Get paid for recyclable plastic.</p>
          </div>

          <div>
            <h3>🌱 Sustain</h3>
            <p>Support a cleaner environment.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;