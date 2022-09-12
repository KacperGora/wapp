import React, { useState } from "react";
import Register from "../RegisterForm/Register";
import Login from "../LoginForm/Login";
function AuthForm({ auth, setAuth }) {
  return (
    <>{auth ? <Register setAuth={setAuth} /> : <Login setAuth={setAuth} />}</>
  );
}

export default AuthForm;
