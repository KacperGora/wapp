import React from "react";
import { auth } from "../../../../firebase";
import classes from "./ChatMessage.module.css";
import img from "../../../../Assets/images/no-user-image.gif";
function ChatMessage(props) {
  const { text, uid, photoUrl, createdAt, displayName } = props.message;
  const sentTime = props.message.createdAt?.toDate().toLocaleString();
  const messageClass =
    uid === auth.currentUser.uid ? classes.sent : classes.received;

  return (
    <div className={classes.singleMsg}>
      <div className={messageClass}>
        <p className={classes.msg}>{text}</p>
        <div className={classes.msgDetail}>
          <p className={classes.author}>{displayName}</p>
          <p className={classes.timeBox}>Wysłano {sentTime}</p>
        </div>
      </div>
    
    </div>
  );
}

export default ChatMessage;
