import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
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
import ChatSendMessage from "../ChatSendMessage/ChatSendMessage";
import ChatMessage from "../ChatMessage/ChatMessage";
import MainChatHeader from "../MainChatHeader/MainChatHeader";

function Chat() {
  const { id } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  useEffect(() => {
    if (id) {
      const unsub = onSnapshot(doc(db, "rooms", id), (doc) => {
        setRoomName(doc.data().name);
      });
      const q = query(
        collection(db, `rooms/${id}`, "messages"),
        orderBy("createdAt", "asc")
      );
      const unsub2 = onSnapshot(q, (querySnap) => {
        setMessages(querySnap.docs.map((doc) => doc.data()));
      });

      return () => {
        unsub();
        unsub2();
      };
    }
  }, [id]);

  useEffect(() => {
    const unsub = () =>
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });

    return () => {
      unsub();
    };
  }, [messages]);

  return (
    <aside className={classes.box}>
      <MainChatHeader roomName={roomName} />
      <div className={classes.container}>
        {messages &&
          messages.map((msg) => (
            <div className={classes.msgWrapper} ref={scrollRef}>
              <ChatMessage key={msg.id} message={msg} />
            </div>
          ))}
      </div>
    </aside>
  );
}

export default Chat;
