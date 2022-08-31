import React, { useEffect, useState } from "react";
import classes from "./ListChat.module.css";

import { db } from "../../../../firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { orderBy } from "lodash";
import SidebarChatRoom from "../SidebarChatRoom/SidebarChatRoom";

function ListChat() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    if (db) {
      const q = query(collection(db, "rooms"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        setRooms(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
        return unsubscribe();
      });
    }
  }, []);
  console.log(rooms);
  return (
    <ul className={classes.allChatItems}>
      {rooms.map((room) => (
        <SidebarChatRoom key={room.id} id={room.id} name={room.data.name} />
      ))}
    </ul>
  );
}

export default ListChat;
