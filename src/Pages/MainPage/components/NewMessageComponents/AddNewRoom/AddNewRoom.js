import React, { useState } from "react";
import classes from "./AddNewRoom.module.css";
import { HiPlus } from "react-icons/hi";
import { db } from "../../../../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
function AddNewRoom({ isEmpty }) {
  const [newRoomName, setNewRoomName] = useState("");
  const newRoomSubmitHandler = async (e) => {
    e.preventDefault();

    if (db) {
      if (newRoomName.trim() !== "") {
        const roomRef = await addDoc(collection(db, "rooms"), {
          name: newRoomName,
          createdAt: serverTimestamp(),
        });
      }
    }
    setNewRoomName("");
   
  };

  return (
    <div className={classes.searchContainer}>
      <div className={classes.searchBox}>
        <input
          onKeyUp={(e) => {
            if (e.code === "Enter" && newRoomName.trim() !== "") {
              newRoomSubmitHandler(e);
            }
          }}
          onChange={(e) => setNewRoomName(e.target.value)}
          placeholder="Dodaj nowy czat!"
          type={"text"}
          value={newRoomName}
        />
        <button onClick={newRoomSubmitHandler} className={classes.button}>
          <HiPlus className={classes.icon} />
        </button>
      </div>
    </div>
  );
}

export default AddNewRoom;
