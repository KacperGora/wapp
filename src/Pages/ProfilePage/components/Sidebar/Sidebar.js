import React from "react";
import { NavLink, useParams } from "react-router-dom";

import classes from "./Sidebar.module.css";
function Sidebar() {
  const { userId } = useParams();

  return (
    <aside className={classes.sidebarContainer}>
      <nav>
        <ul className={classes.navContent}>
          <NavLink className={classes.navLink} to={`${userId}/`}>
            Profil
          </NavLink>
          <NavLink className={classes.navLink} to={`${userId}/notifications`}>
            Powiadomienia
          </NavLink>
          <NavLink className={classes.navLink} to={`${userId}/settings`}>
            Ustawienia
          </NavLink>
          <NavLink className={classes.navLink} to={`${userId}/theme`}>
            Motyw
          </NavLink>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
