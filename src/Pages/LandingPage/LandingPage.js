import React, { useState } from "react";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";

import MainContent from "./components/MainContentLandingPage/MainContent";
import classes from "./LandingPage.module.css";
function LandingPage() {
    const [loginOrRegister, setLoginOrRegister] = useState(false);
  return (
    <div className={classes.landingPageContainer}>
      <div>
        <Navbar setAuth={setLoginOrRegister} />
      </div>
      <div className={classes.mainContent}>
        <MainContent setAuth={setLoginOrRegister} auth={loginOrRegister} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
