import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Chat from "../ChatComponents/Chat/Chat";
import ChatSendMessage from "../NewMessageComponents/ChatSendMessage/ChatSendMessage";
import Sidebar from "../SidebarComponents/Sidebar/Sidebar";

import classes from "./MainContent.module.css";
function MainContent({ users }) {
  const { id } = useParams();
  const [selectedUser, setSelectedUser] = useState("");

  return (
    <div className={classes.loginContainer}>
      <Sidebar setSelectedUser={setSelectedUser} users={users} />
      <div className={classes.chatContainer}>
        <Chat selectedUser={selectedUser} users={users} />
        <ChatSendMessage id={id} />
      </div>
    </div>
  );
}

export default MainContent;
