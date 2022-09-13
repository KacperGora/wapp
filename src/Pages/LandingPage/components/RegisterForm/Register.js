import React, { useEffect, useState } from "react";
import {
  MdAlternateEmail,
  MdOutlineImage,
  MdOutlineLock,
  MdPersonOutline,
} from "react-icons/md";

import useArePasswordsCorrect from "../../../../hooks/useArePasswordsCorrect";
import useUploadImage from "../../../../hooks/useUploadImage";
import classes from "./Register.module.css";
import ProgressBar from "../../../../components/UI/Progress/ProgressBar";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../../../firebase";
import Spinner from "../../../../components/UI/Spinner/Spinner";

import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
function Register({ setAuth }) {
  const [file, setFile] = useState();
  const [progress, imageUrl] = useUploadImage(file);
  const [formIsValid, setFormIsValid] = useState(false);
  const [authStatus, setAuthStatus] = useState(false);

  const [registerData, setRegisterData] = useState({
    nickName: "",
    password: "",
    confirmPassword: "",
    email: "",
    photoUrl: "",
    isLoading: false,
    hasError: false,
  });

  const {
    password,
    confirmPassword,
    hasError,
    email,
    photoUrl,
    isLoading,
    nickName,
  } = registerData;

  //custom hook
  const { error, passwordsOk, setTouched } = useArePasswordsCorrect(
    password,
    confirmPassword
  );
  //
  const resetData = () => {
    setRegisterData({
      nickName: "",
      password: "",
      confirmPassword: "",
      email: "",
      photoUrl: "",
      isLoading: false,
      hasError: false,
    });
  };
  useEffect(() => {
    if (imageUrl) {
      setRegisterData({ ...registerData, photoUrl: imageUrl });
    }
  }, [imageUrl]);
  useEffect(() => {
    if (
      (password !== "") &
      (email !== "") &
      (photoUrl !== "") &
      (nickName !== "") &
      passwordsOk
    ) {
      setFormIsValid(true);
    } else setFormIsValid(false);
  }, [email, nickName, password, passwordsOk, photoUrl]);

  const inputChangeHandler = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
      hasError: null,
    });
  };
  const registerFormSubmitHandler = async (e) => {
    e.preventDefault();
    setRegisterData({ ...registerData, isLoading: true });
    try {
      const registeredUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: nickName,
        photoURL: imageUrl,
      });

      await setDoc(doc(db, "users", registeredUser.user.uid), {
        isOnline: false,
        email: registeredUser.user.email.toLowerCase(),
        uid: registeredUser.user.uid,
        createdAt: serverTimestamp(),
        photoUrl: registeredUser.user.photoURL,
        nickName: registeredUser.user.displayName,
        friends: [],
      });
      if (registeredUser) {
        setAuthStatus(true);
        resetData();
      }
    } catch (error) {
      console.log(error);
      const { code } = error;
      if (code === "auth/email-already-in-use") {
        setRegisterData({
          ...registerData,
          hasError: "Na podany adres email istnieje założone konto",
        });
      } else if (code === "auth/invalid-email") {
        setRegisterData({
          ...registerData,
          hasError:
            "Na podany adres email nie znaleziono zarejestrowanego konta.",
        });
      } else setRegisterData({ ...registerData, hasError: code });
    }
  };
  if (authStatus && !isLoading) {
    setTimeout(() => {
      setAuth(false);
    }, 3000);
  }
  return (
    <form
      className={classes.formContainer}
      onSubmit={registerFormSubmitHandler}
    >
      <div className={classes.inputContainer}>
        <label>
          <MdPersonOutline color="#008569" size="2.4rem" />
        </label>
        <input
          type="text"
          placeholder="Nickname"
          required
          name="nickName"
          autoComplete="on"
          onChange={inputChangeHandler}
          value={registerData.nickName}
        />
      </div>
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
          value={registerData.email}
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
          value={registerData.password}
        />
      </div>
      <div className={classes.inputContainer}>
        <label>
          <MdOutlineLock color="#008069" size="2.4rem" />
        </label>
        <input
          type="password"
          placeholder="Powtórz hasło"
          required
          autoComplete="on"
          minLength="6"
          onBlur={() => setTouched(true)}
          name="confirmPassword"
          onChange={inputChangeHandler}
          value={registerData.confirmPassword}
        />
      </div>
      {progress !== 0 ? (
        <div className={classes.inputContainer}>
          <ProgressBar completed={progress} bgcolor={"#008069"} />
          <p style={{ fontSize: "1.2rem" }}>{progress}%</p>
        </div>
      ) : (
        <div className={classes.inputContainer}>
          <MdOutlineImage color="#008069" size="2.4rem" />
          <input
            type={"file"}
            name="photo"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      )}
      {error && <p className={classes.errorInformation}>{error}</p>}
      {hasError && <p className={classes.errorInformation}>{hasError}</p>}
      <div className={classes.actions}>
        {!isLoading ? (
          authStatus && !isLoading ? (
            <p
              onClick={() => setAuth(false)}
              className={classes.successInformation}
            >
              Zarejestrowano poprawnie, kliknij by wrócić do logowania lub
              poczekaj chwilę
            </p>
          ) : (
            <>
              <button
                onClick={() => {
                  setAuth(false);
                  resetData();
                }}
                className={` ${classes.newAccBtn} ${classes.lgnBtn}`}
              >
                Powrót
              </button>
              <button
                disabled={!formIsValid}
                title={!formIsValid ? "Uzupełnij dane" : "Zarejestruj"}
                className={classes.lgnBtn}
                onClick={registerFormSubmitHandler}
              >
                Zarejestruj
              </button>
            </>
          )
        ) : (
          <Spinner />
        )}
      </div>{" "}
    </form>
  );
}

export default Register;
