import React from "react";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";

import MainContent from "./components/MainContentLandingPage/MainContent";
import classes from "./LandingPage.module.css";
function LandingPage() {
  return (
    <div className={classes.landingPageContainer}>
      <div>
        <Navbar />
      </div>
      <div className={classes.mainContent}>
        <MainContent />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
