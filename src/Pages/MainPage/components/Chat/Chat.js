import React, { useEffect, useState } from "react";

import classes from "./Chat.module.css";
import { db } from "../../../../firebase";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import ChatSendMessage from "../ChatSendMessage/ChatSendMessage";
import ChatMessage from "../ChatMessage/ChatMessage";

function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (db) {
      const q = query(
        collection(db, "messages"),
        orderBy("createdAt"),
        
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

  return (
    <aside className={classes.box}>
      <div className={classes.container}>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
      <section>
        <ChatSendMessage />
      </section>
    </aside>
  );
}

export default Chat;
