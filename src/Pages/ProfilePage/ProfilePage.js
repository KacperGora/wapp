import React from "react";
import HeadingProfilePage from "./components/HeadingProfilePage/HeadingProfilePage";
import MainProfile from "./components/MainProfile/MainProfile";
import Sidebar from "./components/Sidebar/Sidebar";
import classes from "./ProfilePage.module.css";
function ProfilePage() {
  return (
    <div className={classes.profilePageContainer}>
      <HeadingProfilePage />
      <div className={classes.mainContent}>
        <Sidebar />
        <MainProfile />
      </div>
    </div>
  );
}

export default ProfilePage;
