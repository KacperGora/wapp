import React from "react";
import classes from "./SidebarChatRoom.module.css";
import noImg from "../../../../../Assets/images/no-user-image.gif";
import { Link } from "react-router-dom";

function SidebarChatRoom({ user, selectedUser }) {
  const onlineClass = user.isOnline ? classes.online : classes.offline;

  return (
    <Link className={classes.link} to={user.uid}>
      <li className={classes.singleItem}>
        <div className={classes.imgBox}>
          <img src={user.photoUrl || noImg} alt="User avatar" />
        </div>
        <div className={classes.msgDetails}>
          <div className={classes.msgAuthor}>{user.nickName}</div>

          <div className={classes.messageText}></div>
        </div>
        <div className={classes.textTime}>
          <div className={onlineClass}></div>
        </div>
      </li>
    </Link>
  );
}

export default SidebarChatRoom;
