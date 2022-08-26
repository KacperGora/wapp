import React from "react";
import Logo from "../../../../Assets/icons/Logo";
import "./MainContent.css";
import image from "../../../../Assets/images/2211.png";
import LoginForm from "../LoginForm/LoginForm";
function MainContent() {
  return (
    <main className="loginContainer">
      <div>
        <section className="loginText">
          <div className="textContainer">
            <h2>Aby skorzystać z aplikacji</h2>
            <Logo />
          </div>
          <p>zaloguj się przy użyciu konta lub stwórz nowe.</p>
        </section>
        <LoginForm />
      </div>
      <div className="imgContainer">
        <img src={image} alt="Screens of app features" />
      </div>
    </main>
  );
}

export default MainContent;
