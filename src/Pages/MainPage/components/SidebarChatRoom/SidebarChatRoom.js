import React from "react";
import classes from "./SidebarChatRoom.module.css";
import noImg from "../../../../Assets/images/no-user-image.gif";
import { Link } from "react-router-dom";
function SidebarChatRoom({ id, name }) {
  return (
    <Link className={classes.link} to={`${id}`}>
      <li className={classes.singleItem}>
        <div className={classes.imgBox}>
          <img src={noImg} alt="User avatar" />
        </div>
        <div className={classes.msgDetails}>
          <div className={classes.msgAuthor}>{name}</div>
          <div className={classes.messageText}>lorem ipsum bla bla bla</div>
        </div>
        <div className={classes.textTime}>Time</div>
      </li>
    </Link>
  );
}

export default SidebarChatRoom;
