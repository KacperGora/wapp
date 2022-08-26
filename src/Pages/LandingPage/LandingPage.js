import React from "react";
import Footer from "../../Layout/Footer/Footer";
import Navbar from "../../Layout/Navbar/Navbar";

import MainContent from "./components/MainContent/MainContent";
import "./LandingPage.css";
function LandingPage() {
  return (
    <div className="landingPageContainer">
      <div>
        <Navbar />
      </div>
      <div className="mainContent">
        <MainContent />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
