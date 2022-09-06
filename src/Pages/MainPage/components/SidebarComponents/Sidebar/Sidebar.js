import React, { useState } from "react";
import classes from "./Sidebar.module.css";
import AddNewRoom from "../../NewMessageComponents/AddNewRoom/AddNewRoom";
import Search from "../../Helpers/Search/Search";
import ListChat from "../ListChat/ListChat";
import SidebarHeader from "../SidebarHeader/SidebarHeader";
function Sidebar({ id, rooms }) {
  const [searchValue, setSearchValue] = useState("");
  const [addNewRoom, setAddNewRoom] = useState(false);

  return (
    <aside className={classes.container}>
      <div className={classes.chatTools}>
        <SidebarHeader setAddNewRoom={setAddNewRoom} addNewRoom={addNewRoom} />

        {addNewRoom ? (
          <AddNewRoom />
        ) : (
          <Search
            onSearch={setSearchValue}
            placeholder={"Szukaj konwersacji lub załóż nową."}
          />
        )}
      </div>
      <div className={classes.chatList}>
        <ListChat id={id} onSearch={searchValue} rooms={rooms} />
      </div>
    </aside>
  );
}

export default Sidebar;
