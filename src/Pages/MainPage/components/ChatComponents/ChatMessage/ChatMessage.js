import React, { useRef } from "react";
import { auth } from "../../../../../firebase";
import classes from "./ChatMessage.module.css";
function ChatMessage(props) {
  const { text, to, media, nickName, createdAt } = props.message;

  const messageClass =
    to === auth.currentUser.uid ? classes.sent : classes.received;
  const scrollRef = useRef();

  scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  return (
    <div className={classes.singleMsg}>
      <div ref={scrollRef}>
        <div className={messageClass}>
          {media ? <img src={media} alt="users attachment" /> : ""}
          <p className={classes.msg}>{text ? text : ''}</p>
          <div className={classes.msgDetail}>
            <p className={classes.author}>{nickName}</p>
            <p className={classes.timeBox}>
              {createdAt?.toDate().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
