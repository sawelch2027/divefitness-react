import { useState } from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="logo" />
          </Link>
          <h1>DiveFitness</h1>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          Menu ▼
        </button>

        <NavMenu isOpen={isOpen} closeMenu={closeMenu} />
      </div>
    </header>
  );
}

export default Header;