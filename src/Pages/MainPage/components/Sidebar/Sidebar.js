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
function Sidebar() {
  const [searchValue, setSearchValue] = useState();
  console.log(searchValue);
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
            <div className={classes.icon}>
              <HiOutlineStatusOnline />
            </div>
            <div className={classes.icon}>
              <HiOutlineChat />
            </div>
            <div className={classes.icon}>
              <HiOutlineDotsVertical />
            </div>
          </div>
        </header>
        <Search onSearch={setSearchValue} />
      </div>
      <div className={classes.chatList}>
        <ListChat onSearch={searchValue} />
      </div>
    </aside>
  );
}

export default Sidebar;
