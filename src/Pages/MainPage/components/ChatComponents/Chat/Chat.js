import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./Chat.module.css";
import { auth, db } from "../../../../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import ChatMessage from "../ChatMessage/ChatMessage";
import MainChatHeader from "../MainChatHeader/MainChatHeader";

function Chat({ selectedUser }) {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [searchInput, setSearchInput] = useState("");
 

  useEffect(() => {
    const idMsg =
      auth.currentUser.uid > id
        ? `${auth.currentUser.uid + id}`
        : `${id + auth.currentUser.uid}`;

    const msgRef = collection(db, "messages", idMsg, "chat");
    const q = query(msgRef, orderBy("createdAt", "asc"));
    onSnapshot(q, (querySnapshot) => {
      let msg = [];
      querySnapshot.forEach((doc) => {
        msg.push(doc.data());
      });
      setMessages(msg);
    });
  }, [id]);

  //Filtered messages //
  messages.filter((message) => message.text.includes(searchInput));

  return (
    <aside className={classes.box}>
      <div className={classes.headerWrapper}>
        <MainChatHeader
          selectedUser={selectedUser}
          onSearch={setSearchInput}
          lastMsg={messages[messages.length - 1]}
        />{" "}
      </div>
      <div className={classes.container}>
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
    </aside>
  );
}

export default Chat;
