import React, { useEffect, useState } from "react";
import { MdAlternateEmail, MdOutlineLock } from "react-icons/md";
import classes from "./Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../../firebase";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../../../store/authSlice";
import { doc, updateDoc } from "firebase/firestore";

function Login({ setAuth }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formIsValid, setFormIsValid] = useState(false);

  const [loginData, setLoginData] = useState({
    password: "",
    email: "",
    isLoading: false,
    hasError: false,
  });

  const { password, hasError, email, isLoading } = loginData;

  useEffect(() => {
    if ((password !== "") & (email !== "")) {
      setFormIsValid(true);
    } else setFormIsValid(false);
  }, [email, password]);

  const inputChangeHandler = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
      hasError: null,
    });
  };
  const resetState = () => {
    setLoginData({
      password: "",
      email: "",
      isLoading: false,
      hasError: false,
    });
  };
  const loginFormSubmitHandler = async (e) => {
    e.preventDefault();
    setLoginData({ ...loginData, isLoading: true });
    try {
      const logUser = await signInWithEmailAndPassword(auth, email, password);
      if (logUser) {
        const userRef = doc(db, "users", logUser.user.uid);
        await updateDoc(userRef, {
          isOnline: true,
        });
        navigate("/main");
        dispatch(authActions.setUser(logUser.user));
      }

      setLoginData({ ...loginData, isLoading: false });
    } catch (error) {
      const { code } = error;
      if (code === "auth/wrong-password" || "auth/user-not-found") {
        setLoginData({
          ...loginData,
          hasError: "Podane dane są nieprawidłowe",
        });
      } else setLoginData({ ...loginData, hasError: code });
    }
  };

  return (
    <form className={classes.formContainer} onSubmit={loginFormSubmitHandler}>
      <div className={classes.inputContainer}>
        <label>
          <MdAlternateEmail color="#008569" size="2.4rem" />
        </label>
        <input
          type="email"
          placeholder="Adres email"
          required
          autoComplete="on"
          onChange={inputChangeHandler}
          name="email"
          value={loginData.email}
        />
      </div>
      <div className={classes.inputContainer}>
        <label>
          <MdOutlineLock color="#008069" size="2.4rem" />
        </label>
        <input
          type="password"
          placeholder="Hasło"
          required
          autoComplete="on"
          minLength="6"
          onChange={inputChangeHandler}
          name="password"
          value={loginData.password}
        />
      </div>
      {hasError && <p className={classes.errorInformation}>{hasError}</p>}
      <div className={classes.actions}>
        {!isLoading ? (
          <>
            <button
              onClick={() => {
                setAuth(true);
                resetState();
              }}
              className={` ${classes.newAccBtn} ${classes.lgnBtn}`}
            >
              Rejestracja
            </button>
            <button
              disabled={!formIsValid}
              title={!formIsValid ? "Uzupełnij dane" : "Zaloguj"}
              className={classes.lgnBtn}
              onClick={loginFormSubmitHandler}
            >
              Zaloguj
            </button>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </form>
  );
}

export default Login;
