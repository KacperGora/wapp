import React from "react";
import classes from "./ListChat.module.css";
import SidebarChatRoom from "../SidebarChatRoom/SidebarChatRoom";

function ListChat({ users, setSelectedUser }) {

  return (
    <ul className={classes.allChatItems}>
      {users.length > 0 &&
        users.map((user) => (
          <div onClick={() => setSelectedUser(user.nickName)} key={user.uid}>
            <SidebarChatRoom setSelectedUser={setSelectedUser} user={user} />
          </div>
        ))}
    </ul>
  );
}

export default ListChat;
