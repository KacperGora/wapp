import React from "react";
import classes from "./ListChat.module.css";
import SidebarChatRoom from "../SidebarChatRoom/SidebarChatRoom";
import AddNewRoom from "../../NewMessageComponents/AddNewRoom/AddNewRoom";

function ListChat({ onSearch, id, rooms }) {
  const filteredRooms = rooms
    ?.filter((room) =>
      room.data.name?.toLowerCase().includes(onSearch?.toLowerCase())
    )
    .map((room) => (
      <SidebarChatRoom
        messages={room.messages}
        key={room.id}
        id={room.id}
        name={room.data.name}
      />
    ));
  const allRooms = rooms?.map((room) => (
    <SidebarChatRoom
      messages={room.messages}
      key={room.id}
      id={room.id}
      name={room.data.name}
    />
  ));

  return (
    <ul className={classes.allChatItems}>
      {onSearch ? filteredRooms : allRooms}
      {(filteredRooms?.length === 0 || allRooms?.length === 0) && (
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
