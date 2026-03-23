import "./Header.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">

        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <h1>DiveFitness</h1>
        </div>

        {/* Menu label (no toggle yet) */}
        <div className="menu-toggle">
          <h2>Menu ▼</h2>
        </div>

        {/* Navigation */}
        <nav id="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/nutrition">Nutrition</Link></li>
            <li><Link to="/workouts">Workouts</Link></li>
            <li><Link to="/assessments">Assessment</Link></li>
            <li><Link to="/" className="login-btn">Log In</Link></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;