import React from "react";
import { useParams } from "react-router-dom";

import Chat from "../ChatComponents/Chat/Chat";
import ChatSendMessage from "../NewMessageComponents/ChatSendMessage/ChatSendMessage";
import Sidebar from "../SidebarComponents/Sidebar/Sidebar";

import classes from "./MainContent.module.css";
function MainContent({ users }) {
  const { id } = useParams();
  return (
    <div className={classes.loginContainer}>
      <Sidebar users={users} />
      <div className={classes.chatContainer}>
        <Chat users={users} />
        <ChatSendMessage id={id}/>
      </div>
    </div>
  );
}

export default MainContent;
