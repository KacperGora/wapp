import React from "react";
import classes from "./Sidebar.module.css";
function Sidebar() {
  return (
    <aside className={classes.sidebarContainer}>
      <nav>
        <ul className={classes.navContnet}>
          <li>Profil</li>
          <li>Powiadomienia</li>
          <li>Ustawienia</li>
          <li>Motyw</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
