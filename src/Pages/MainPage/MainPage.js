import React from "react";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";

import classes from "./MainPage.module.css";
function MainPage() {
  return (
    <div className={classes.MainPageContainer}>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default MainPage;
