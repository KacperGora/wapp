import React, { useState } from "react";
import classes from "./ChatSendMessage.module.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../../../../firebase";

import uuid from "react-uuid";
function ChatSendMessage({ id }) {
  const [newMessage, setNewMessage] = useState("");
  const idMsg =
    auth.currentUser.uid > id
      ? `${auth.currentUser.uid + id}`
      : `${id + auth.currentUser.uid}`;

  console.log(idMsg);
  const messageSendHandler = async (e) => {
    e.preventDefault();
    if (db) {
      if (newMessage.trim() !== "") {
        await addDoc(collection(db, "messages", idMsg, "chat"), {
          text: newMessage,
          from: auth.currentUser.uid,
          to: id,
          createdAt: serverTimestamp(),
          id: uuid(),
        });
        setNewMessage("");
      }
    }

    setNewMessage("");
  };
  return (
    <form className={classes.newMessageForm} onSubmit={messageSendHandler}>
      <input
        type="text"
        value={newMessage}
        placeholder="Wpisz wiadomość"
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button className={classes.sendBtn}>Wyślij</button>
    </form>
  );
}

export default ChatSendMessage;
