import React, { useEffect, useState } from "react";
import classes from "./ListChat.module.css";

import { db } from "../../../../firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

import SidebarChatRoom from "../SidebarChatRoom/SidebarChatRoom";
import AddNewRoom from "../AddNewRoom/AddNewRoom";

function ListChat({ onSearch, isTouched }) {
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
        return () => {
          unsubscribe();
        };
      });
    }
  }, []);

  const filteredRooms = rooms
    .filter((room) =>
      room.data.name?.toLowerCase().includes(onSearch?.toLowerCase())
    )
    .map((room) => (
      <SidebarChatRoom key={room.id} id={room.id} name={room.data.name} />
    ));
  const allRooms = rooms.map((room) => (
    <SidebarChatRoom key={room.id} id={room.id} name={room.data.name} />
  ));

  return (
    <ul className={classes.allChatItems}>
      {onSearch ? filteredRooms : allRooms}
      {(filteredRooms.length === 0 || allRooms.length === 0) & isTouched && (
        <div>
          <h2 style={{ textAlign: "center", marginTop: "1.2rem" }}>
            Nie znaleziono czatu, załóż nowy.
          </h2>
          <AddNewRoom />
        </div>
      )}
    </ul>
  );
}

export default ListChat;
