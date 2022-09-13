import React, { useEffect, useState } from "react";
import classes from "./Sidebar.module.css";
import AddNewRoom from "../../NewMessageComponents/AddNewRoom/AddNewRoom";
import Search from "../../Helpers/Search/Search";
import ListChat from "../ListChat/ListChat";
import SidebarHeader from "../SidebarHeader/SidebarHeader";
import AddNewFriend from "../AddNewFriend/AddNewFriend";

function Sidebar({ users, setSelectedUser }) {
  const [searchValue, setSearchValue] = useState("");
  const [addNewRoom, setAddNewRoom] = useState(false);

  const usersList = !searchValue
    ? users
    : users.filter((user) =>
        user.nickName?.toLowerCase().includes(searchValue)
      );

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
        <ListChat setSelectedUser={setSelectedUser} users={usersList} />
      </div>
      <AddNewFriend />
    </aside>
  );
}

export default Sidebar;
