import React from "react";
import classes from "./HeadingProfilePage.module.css";
import img from "../../../../Assets/images/no-user-image.gif";

import { useSelector } from "react-redux";

import { HiArrowNarrowLeft } from "react-icons/hi";
import setDefaultOptions from "date-fns/setDefaultOptions";
import { pl } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
function HeadingProfilePage() {
  setDefaultOptions({ locale: pl });
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  return (
    <header className={classes.container}>
      <div className={classes.userDetail}>
        <img className={classes.image} src={img} alt="user avatar" />
        <div>
          <h2>{user.displayName}</h2>
          <p className={classes.lastLoginTime}>{`Ostatnie logowanie: ${new Date(
            user.metadata?.lastSignInTime
          ).toLocaleString()}`}</p>
        </div>
      </div>
      <div onClick={() => navigate(-1)} className={classes.actions}>
        <HiArrowNarrowLeft />
        <h3>Cofnij</h3>
      </div>
    </header>
  );
}

export default HeadingProfilePage;
