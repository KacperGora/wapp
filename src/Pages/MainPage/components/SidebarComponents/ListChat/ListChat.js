import React from "react";
import classes from "./ListChat.module.css";
import SidebarChatRoom from "../SidebarChatRoom/SidebarChatRoom";

function ListChat({ users }) {
  return (
    <ul className={classes.allChatItems}>
      {users.map((user) => (
        <SidebarChatRoom key={user.uid} user={user} />
      ))}
    </ul>
  );
}

export default ListChat;
