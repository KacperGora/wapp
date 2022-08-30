import React, { useEffect, useState } from "react";

import classes from "./Chat.module.css";
import { db } from "../../../../firebase";
import {
  collection,
  doc,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

function Chat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (db) {
      const q = query(
        collection(db, "messages"),
        orderBy("createdAt"),
        limit(25)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const msg = [];
        querySnapshot.forEach((doc) => {
          msg.push(doc.data());
        });
        setMessages(msg);
      });
    }
  }, []);
  console.log(messages);
  return (
    <aside className={classes.container}>
      {messages.map((message) => (
        <li key={message.createdAt}>{message.text}</li>
      ))}
    </aside>
  );
}

export default Chat;
