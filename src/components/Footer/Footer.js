import "./Footer.css";
import { Link } from "react-router-dom";

import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import youtube from "../../assets/images/youtube.png";

function Footer() {
  return (
    <footer>
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h3>Dive Fitness</h3>

          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">

          <div className="column">
            <h4>Workouts</h4>
            <Link to="/workouts">HIIT</Link>
            <Link to="/workouts">Stretch</Link>
            <Link to="/workouts">Strength</Link>
          </div>

          <div className="column">
            <h4>Nutrition</h4>
            <Link to="/nutrition">Weight Gain</Link>
            <Link to="/nutrition">Weight Loss</Link>
            <Link to="/nutrition">Maintain</Link>
          </div>

          <div className="column">
            <h4>Assessments</h4>
            <Link to="/about">Why do I need an Assessment?</Link>
            <Link to="/about">How do I take my measurements?</Link>
            <Link to="/assessments">Measurement Conversion</Link>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Dive Fitness. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;