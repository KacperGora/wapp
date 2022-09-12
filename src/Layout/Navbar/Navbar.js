import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/icons/Logo";
import classes from "./Navbar.module.css";
import { auth, db } from "../../firebase";
import { signOut } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
function Navbar({ setAuth }) {
  const navigate = useNavigate();
  const handleSignout = async () => {
    const userRef = doc(db, "users", auth.currentUser?.uid);
    await updateDoc(userRef, {
      isOnline: false,
    });
    signOut(auth);
    navigate("/");
  };
  return (
    <div className={classes.navbarContainer}>
      <div className={classes.brandContainer} onClick={() => navigate("/")}>
        <Logo />
        <h2 className={classes.brandHeading}>What's App Clone</h2>
      </div>
      <nav className={classes.navContainer}>
        <ul className={classes.navUl}>
          {auth.currentUser ? (
            <>
              <li onClick={handleSignout}>Wyloguj</li>
            </>
          ) : (
            <>
              <li onClick={() => setAuth(false)}>Zaloguj</li>
              <li onClick={() => setAuth(true)}>Zarejestruj</li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
