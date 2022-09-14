import React from "react";
import {
  HiOutlineChat,
  HiOutlineDotsVertical,
  HiOutlineUserAdd,
} from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import classes from "./SidebarHeader.module.css";
import noImg from "../../../../../Assets/images/no-user-image.gif";
import { auth } from "../../../../../firebase";
function SidebarHeader({
  setAddNewRoom,
  addNewRoom,
  request,
  setShowRequest,
  showRequest,
}) {
  const navigate = useNavigate();
  const uid = auth?.currentUser?.uid;
  return (
    <header className={classes.heading}>
      <Link className={classes.link} to={`/profile/${uid}`}>
        <div className={classes.imgBox}>
          <img src={auth.currentUser?.photoURL || noImg} alt="User avatar" />
        </div>
        <div className={classes.userInfo}>
          <h4>{auth.currentUser.displayName}</h4>
        </div>
      </Link>
      <div className={classes.iconsBox}>
        <div
          onClick={() => setShowRequest(!showRequest)}
          title="Zmień status"
          className={`${classes.icon} ${classes.request}`}
        >
          <HiOutlineUserAdd />
          <div className={classes.badge}>{request.length}</div>
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
  );
}

export default SidebarHeader;
