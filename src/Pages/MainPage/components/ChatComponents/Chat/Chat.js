import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./Chat.module.css";
import { db } from "../../../../../firebase";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import ChatMessage from "../ChatMessage/ChatMessage";
import MainChatHeader from '../MainChatHeader/MainChatHeader'


function Chat() {
  const { id } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const scrollRef = useRef();
  const filteredMessages = messages.filter((room) =>
    room.text?.toLowerCase().includes(searchInput?.toLowerCase())
  );

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
  }, []);

  return (
    <aside className={classes.box}>
      <MainChatHeader
        onSearch={setSearchInput}
        roomName={roomName}
        lastMsg={messages[messages.length - 1]}
      />
      <div className={classes.container}>
        {searchInput
          ? filteredMessages.map((msg) => (
              <div key={msg.id} className={classes.msgWrapper} ref={scrollRef}>
                <ChatMessage key={msg.id} message={msg} />
              </div>
            ))
          : messages &&
            messages.map((msg) => (
              <div key={msg.id} className={classes.msgWrapper} ref={scrollRef}>
                <ChatMessage key={msg.id} message={msg} />
              </div>
            ))}
      </div>
    </aside>
  );
}

export default Chat;
