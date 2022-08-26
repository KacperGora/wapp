import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPage";
import MainPage from "../Pages/MainPage/MainPage";

function Routers() {
  return (
    <div>
      <Routes>
        <Route element={<MainPage />} path="/main" />
        <Route element={<LandingPage />} path="/" />
      </Routes>
    </div>
  );
}

export default Routers;
