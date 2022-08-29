import React from "react";
import classes from "./ListChat.module.css";
import noImg from "../../../../Assets/images/no-user-image.gif";
function ListChat() {
  return (
    <ul>
      <li className={classes.singleItem}>
        <div className={classes.imgBox}>
          <img src={noImg} alt="User avatar" />
        </div>
        <div>Name</div>
        <div>Time</div>
        <div>Message</div>
      </li>
    </ul>
  );
}

export default ListChat;
