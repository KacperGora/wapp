import React from "react";
import Logo from "../../Assets/icons/Logo";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="brandContainer">
        <Logo />
        <h2 className="brandHeading">What's App Clone</h2>
      </div>
      <nav className="navContainer">
        <ul className="nav-ul">
            <li>Login</li>
            <li>Login</li>
            <li>Login</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
