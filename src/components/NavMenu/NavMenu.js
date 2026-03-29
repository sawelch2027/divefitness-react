import "./NavMenu.css";
import { Link } from "react-router-dom";

function NavMenu({ isOpen, closeMenu }) {
  return (
    <nav className={isOpen ? "nav-menu open" : "nav-menu"}>
      <ul>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
        <li><Link to="/nutrition" onClick={closeMenu}>Nutrition</Link></li>
        <li><Link to="/workouts" onClick={closeMenu}>Workouts</Link></li>
        <li><Link to="/assessments" onClick={closeMenu}>Assessment</Link></li>
        <li><Link to="/" className="login-btn" onClick={closeMenu}>Log In</Link></li>
      </ul>
    </nav>
  );
}

export default NavMenu;