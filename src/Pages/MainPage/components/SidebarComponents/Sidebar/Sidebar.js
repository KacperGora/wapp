import React, { useEffect, useState } from "react";
import classes from "./Sidebar.module.css";
import AddNewRoom from "../../NewMessageComponents/AddNewRoom/AddNewRoom";
import Search from "../../Helpers/Search/Search";
import ListChat from "../ListChat/ListChat";
import SidebarHeader from "../SidebarHeader/SidebarHeader";
import AddNewFriend from "../AddNewFriend/AddNewFriend";
import RequestList from "../RequestList/RequestList";

function Sidebar({ users, setSelectedUser, request }) {
  const [searchValue, setSearchValue] = useState("");
  const [addNewRoom, setAddNewRoom] = useState(false);
  const [showRequest, setShowRequest] = useState(false);

  const usersList = !searchValue
    ? users
    : users.filter((user) =>
        user.nickName?.toLowerCase().includes(searchValue)
      );

  return (
    <aside className={classes.container}>
      <div className={classes.chatTools}>
        <SidebarHeader
          setShowRequest={setShowRequest}
          showRequest={showRequest}
          request={request}
          setAddNewRoom={setAddNewRoom}
          addNewRoom={addNewRoom}
        />

        {addNewRoom ? (
          <AddNewRoom />
        ) : (
          <Search
            onSearch={setSearchValue}
            placeholder={"Szukaj konwersacji lub załóż nową."}
          />
        )}
      </div>
       
      {showRequest ? users.length !== 0 ? (
        <section className={classes.chatList}>
          <ListChat setSelectedUser={setSelectedUser} users={usersList} />
        </section>
      ) : (
        <>
          <h2 className={classes.noFriends}>
            Wygląda na to że nie masz znajomych, wyszukaj ich za pomocą
            wyszukwiarki
          </h2>
          <AddNewFriend />
        </>
      ): <RequestList request={request}/>}

      {users.length > 0 ? (
        <div className={classes.newFriend}>
          <AddNewFriend />
        </div>
      ) : (
        ""
      )}
    </aside>
  );
}

export default Sidebar;
