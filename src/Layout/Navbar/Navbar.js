import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/icons/Logo";
import classes from "./Navbar.module.css";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className={classes.navbarContainer}>
      <div className={classes.brandContainer} onClick={() => navigate("/")}>
        <Logo />
        <h2 className={classes.brandHeading}>What's App Clone</h2>
      </div>
      <nav className={classes.navContainer}>
        <ul className={classes.navUl}>
          <li>Login</li>
          <li>Login</li>
          <li>Login</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
