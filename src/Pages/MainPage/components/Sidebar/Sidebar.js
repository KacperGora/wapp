import React from "react";
import classes from "./Sidebar.module.css";
import noImg from "../../../../Assets/images/no-user-image.gif";
import {
  HiOutlineStatusOnline,
  HiOutlineChat,
  HiOutlineDotsVertical,
} from "react-icons/hi";
import ListChat from "../ListChat/ListChat";
import Search from "../Search/Search";

function Sidebar() {
  return (
    <aside className={classes.container}>
      <header className={classes.heading}>
        <div className={classes.imgBox}>
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
      <Search />
      <ListChat />
    </aside>
  );
}

export default Sidebar;
