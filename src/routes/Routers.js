import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import MainPage from "../Pages/MainPage/MainPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
// import MainPage from "../Pages/MainPage/MainPage";

function Routers() {
  return (
    <div>
      <Routes>
        <Route element={<ProfilePage />} path="profile" >
          <Route element={<ProfilePage/>} path=":userId"/>
          </Route>

        <Route element={<MainPage />} path="main">
          <Route element={<MainPage />} path=":id" />
        </Route>

        <Route element={<LandingPage />} path="/" />
      </Routes>
    </div>
  );
}

export default Routers;
