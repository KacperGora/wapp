import React from "react";
import { auth } from "../../../../../firebase";
import classes from "./ChatMessage.module.css";
function ChatMessage(props) {
  const { text, to, photoUrl, nickName, createdAt } = props.message;
console.log(to)
  const messageClass =
    to === auth.currentUser.uid ? classes.sent : classes.received;

  return (
    <div className={classes.singleMsg}>
      <div className={messageClass}>
        <p className={classes.msg}>{text}</p>
        <div className={classes.msgDetail}>
          <p className={classes.author}>{nickName}</p>
          <p className={classes.timeBox}>
            {createdAt?.toDate().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
