import React from 'react'
import Footer from '../../Layout/Footer/Footer'
import Navbar from '../../Layout/Navbar/Navbar'
import MainContent from './MainContent/MainContent'
import './MainPage.css'
function MainPage() {
  return (
    <div className="mainPageContainer">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default MainPage
