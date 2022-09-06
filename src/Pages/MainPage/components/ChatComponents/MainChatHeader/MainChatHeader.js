import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

import Search from "../../Helpers/Search/Search";
import classes from "./MainChatHeader.module.css";
function MainChatHeader({ roomName, lastMsg, onSearch }) {
  const [toSearch, setToSearch] = useState(false);

  return (
    <div className={classes.container}>
      {toSearch ? (
        <Search
          setToSearch={setToSearch}
          toSearch={toSearch}
          onSearch={onSearch}
          placeholder={"Wyszukaj wiadomości"}
        />
      ) : (
        <div className={classes.chatDetails}>
          <div>
            <h3>{roomName}</h3>
            <p>
              Widziano ostatnio: {lastMsg?.createdAt?.toDate().toLocaleString()}
            </p>
          </div>

          <HiOutlineSearch
            onClick={() => setToSearch(true)}
            title="Szukaj w wiadomościach"
            className={classes.icon}
          />
        </div>
      )}
    </div>
  );
}

export default MainChatHeader;
