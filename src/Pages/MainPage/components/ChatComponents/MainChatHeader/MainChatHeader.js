import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
import Search from "../../Helpers/Search/Search";
import classes from "./MainChatHeader.module.css";
function MainChatHeader({ lastMsg, onSearch, selectedUser }) {
  const [toSearch, setToSearch] = useState(false);

  return (
    <div className={classes.container}>
      {toSearch ? (
        <div className={classes.searchbarContainer}>
          <Search
            setToSearch={setToSearch}
            toSearch={toSearch}
            onSearch={onSearch}
            placeholder={"Wyszukaj wiadomości"}
          />
          <MdOutlineCancel
            className={classes.icon}
            onClick={() => setToSearch(false)}
          />
        </div>
      ) : (
        <div className={classes.chatDetails}>
          <div>
            <h3>{selectedUser}</h3>
            <p>
              Widziano ostatnio: {lastMsg?.createdAt?.toDate().toLocaleString()}
            </p>
          </div>

          <HiOutlineSearch
            onClick={() => setToSearch(!toSearch)}
            title="Szukaj w wiadomościach"
            className={classes.icon}
          />
        </div>
      )}
    </div>
  );
}

export default MainChatHeader;
