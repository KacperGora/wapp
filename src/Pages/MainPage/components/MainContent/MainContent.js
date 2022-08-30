import React from "react";
import Chat from "../Chat/Chat";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./MainContent.module.css";
function MainContent() {
  return (
    <div className={classes.loginContainer}>
      <Sidebar />
      <div className={classes.chatContainer}>
        <Chat />
      </div>
    </div>
  );
}

export default MainContent;
