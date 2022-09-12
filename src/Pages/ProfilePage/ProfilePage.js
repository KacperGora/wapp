import React from "react";
import { useParams } from "react-router-dom";
import HeadingProfilePage from "./components/HeadingProfilePage/HeadingProfilePage";
import MainProfile from "./components/MainProfile/MainProfile";
import Sidebar from "./components/Sidebar/Sidebar";
import classes from "./ProfilePage.module.css";
function ProfilePage({content}) {
console.log(content)
  return (
    <div className={classes.profilePageContainer}>
      <HeadingProfilePage />
      <div className={classes.mainContent}>
        <Sidebar />
        <MainProfile content={content}/>
      </div>
    </div>
  );
}

export default ProfilePage;
