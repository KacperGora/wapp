import React from "react";
import classes from "./SidebarChatRoom.module.css";
import noImg from "../../../../Assets/images/no-user-image.gif";
import { Link } from "react-router-dom";

function SidebarChatRoom({ id, name, messages }) {
  let lastMessage = messages[0]?.text;

  if(lastMessage?.length >10) {
   lastMessage = lastMessage.slice(0, 10) + '...'
  }
  return (
    <Link className={classes.link} to={`${id}`}>
      <li className={classes.singleItem}>
        <div className={classes.imgBox}>
          <img src={noImg} alt="User avatar" />
        </div>
        <div className={classes.msgDetails}>
          <div className={classes.msgAuthor}>{name}</div>

          <div className={classes.messageText}>{lastMessage}</div>
        </div>
        <div className={classes.textTime}>
          <div className={classes.dot}></div>
          {messages[0]?.createdAt?.toDate().toLocaleString()}
        </div>
      </li>
    </Link>
  );
}

export default SidebarChatRoom;
