import React from "react";
import HeadingProfilePage from "./components/HeadingProfilePage/HeadingProfilePage";
import Sidebar from "./components/Sidebar/Sidebar";
import classes from "./ProfilePage.module.css";
function ProfilePage() {
  return (
    <div className={classes.profilePageContainer}>
      <HeadingProfilePage />
      <Sidebar />
    </div>
  );
}

export default ProfilePage;
