import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../../firebase";
import Chat from "../Chat/Chat";
import ChatSendMessage from "../ChatSendMessage/ChatSendMessage";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./MainContent.module.css";
function MainContent() {
  const [rooms, setRooms] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (db) {
      const q = query(collection(db, `rooms`), orderBy("createdAt", "desc"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        setRooms(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
            messages: [],
          }))
        );
        // return () => {
        //   unsubscribe();
        // };
      });
    }
  }, []);
  console.log(rooms);
  rooms.forEach((room) => {
    const q = query(
      collection(db, `rooms/${room.id}/messages`),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(q, (qs) => {
      room.messages = qs.docs.map((doc) => doc.data());
    });
    // return () => unsub();
  });
  return (
    <div className={classes.loginContainer}>
      <Sidebar rooms={rooms} id={id} />
      <div className={classes.chatContainer}>
        <Chat rooms={rooms} />
        <ChatSendMessage id={id} />
      </div>
    </div>
  );
}

export default MainContent;
