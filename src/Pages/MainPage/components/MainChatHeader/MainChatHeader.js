import React from "react";
import {
  HiOutlineChat,
  HiOutlineDotsVertical,
  HiOutlineStatusOnline,
} from "react-icons/hi";
import classes from "./MainChatHeader.module.css";
function MainChatHeader({ roomName }) {
  return (
    <div className={classes.container}>
      <div className={classes.chatDetails}>
        <h3>{roomName}</h3>
        <p>Widziano ostatnio: </p>
      </div>
    </div>
  );
}

export default MainChatHeader;
