import React from "react";
import { useParams } from "react-router-dom";
import Chat from "../Chat/Chat";
import ChatSendMessage from "../ChatSendMessage/ChatSendMessage";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./MainContent.module.css";
function MainContent() {
  const {id} = useParams()
  return (
    <div className={classes.loginContainer}>
      <Sidebar />
      <div className={classes.chatContainer}>
        <Chat />
        <ChatSendMessage id={id} />
      </div>
    </div>
  );
}

export default MainContent;
