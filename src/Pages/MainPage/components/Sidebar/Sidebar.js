import React, { useState } from "react";
import classes from "./Sidebar.module.css";
import noImg from "../../../../Assets/images/no-user-image.gif";
import {
  HiOutlineStatusOnline,
  HiOutlineChat,
  HiOutlineDotsVertical,
} from "react-icons/hi";
import ListChat from "../ListChat/ListChat";
import Search from "../Search/Search";
import { useNavigate } from "react-router-dom";
import AddNewRoom from "../AddNewRoom/AddNewRoom";
function Sidebar() {
  const [searchValue, setSearchValue] = useState();
  const [addNewRoom, setAddNewRoom] = useState(false);
  const [isTouchedSearchInput, setIsTouchedIsTouchedSearchedInput] =
    useState(false);
  const navigate = useNavigate();

  return (
    <aside className={classes.container}>
      <div className={classes.chatTools}>
        <header className={classes.heading}>
          <div
            onClick={() => {
              navigate("/profile");
            }}
            className={classes.imgBox}
          >
            <img src={noImg} alt="User avatar" />
          </div>
          <div className={classes.iconsBox}>
            <div title="Zmień status" className={classes.icon}>
              <HiOutlineStatusOnline />
            </div>
            <div
              onClick={() => setAddNewRoom(!addNewRoom)}
              className={classes.icon}
            >
              <HiOutlineChat title="Dodaj nowy czat" />
            </div>
            <div className={classes.icon}>
              <HiOutlineDotsVertical title="Więcej.." />
            </div>
          </div>
        </header>

        {addNewRoom ? (
          <AddNewRoom />
        ) : (
          <Search
            onTouch={setIsTouchedIsTouchedSearchedInput}
            onSearch={setSearchValue}
          />
        )}
      </div>
      <div className={classes.chatList}>
        <ListChat isTouched={isTouchedSearchInput} onSearch={searchValue} />
      </div>
    </aside>
  );
}

export default Sidebar;
