import React, { useState, useEffect } from "react";
import classes from "./ChatSendMessage.module.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
function ChatSendMessage({ id }) {
  const [newMessage, setNewMessage] = useState("");
  const user = useSelector((state) => state.auth.user);


  const messageSendHandler = async (e) => {
    e.preventDefault();
    if (db) {
      if (newMessage.trim() !== "") {
        const msgRef = await addDoc(collection(db, `rooms/${id}/messages`), {
          text: newMessage,
          createdAt: serverTimestamp(),
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: "",
          id: uuid(),
        });
      }
    }

    setNewMessage("");
  };
  return (
    <form onSubmit={messageSendHandler}>
      <input
        type="text"
        value={newMessage}
        placeholder="Wpisz wiadomość"
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button>Wyślij</button>
    </form>
  );
}

export default ChatSendMessage;
