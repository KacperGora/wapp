import React from "react";
import Logo from "../../../../Assets/icons/Logo";
import classes from "./MainContent.module.css";
import image from "../../../../Assets/images/2211.png";
import LoginForm from "../AuthForm/AuthForm";
import AuthForm from "../AuthForm/AuthForm";
function MainContent({ auth, setAuth }) {
  return (
    <main className={classes.loginContainer}>
      <div>
        <section className={classes.loginText}>
          <div className={classes.textContainer}>
            <h2>Aby skorzystać z aplikacji</h2>
            <Logo />
          </div>
          <p>zaloguj się przy użyciu konta lub stwórz nowe.</p>
        </section>
        <AuthForm auth={auth} setAuth={setAuth} />
      </div>
      <div className={classes.imgContainer}>
        <img src={image} alt="Screens of app features" />
      </div>
    </main>
  );
}

export default MainContent;
