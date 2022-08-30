import React, { useEffect, useState } from "react";
import classes from "./AuthForm.module.css";

import {
  MdAlternateEmail,
  MdOutlineLock,
  MdPersonOutline,
} from "react-icons/md";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../../../../firebase";
import Spinner from "../../../../components/UI/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import useIsValid from "../../../../hooks/useIsValid";
import { useDispatch } from "react-redux";
import { authActions } from "../../../../store/authSlice";
function AuthForm() {
  const [nickName, setNickName] = useState("");
  const [authError, setAuthError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const [registerStatus, setRegisterStatus] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useIsValid(
    (value) =>
      value.trim() !== "" &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  );
  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useIsValid((value) => value.trim() !== "" && value.length > 5);

  useEffect(() => {
    if (passwordIsValid && emailIsValid) setFormIsValid(true);
  }, [emailIsValid, passwordIsValid]);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!register) {
        const logUser = await signInWithEmailAndPassword(auth, email, password);
        if (logUser) {
          navigate("/main");
          dispatch(authActions.setUser(logUser.user));
        }
      } else if (register) {
        const newUser = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(auth.currentUser, {
          displayName: nickName,
        });
        if (newUser) {
          setRegisterStatus(true);
        }
      }
    } catch (error) {
      const { code, message } = error;
      switch (message) {
        case "Firebase: Error (auth/user-not-found).":
          setAuthError("Nieznaleziono użytkownika, sprawdź dane.");
          break;
        case "Firebase: Error (auth/invalid-email).":
          setAuthError("Wprowadzono niepoprawne dane logowania.");
          break;

        default:
          return;
      }
      setIsLoading(false);
      throw new Error(message);
    }
  };
  return (
    <>
      <form
        onKeyUp={(e) => {
          if (e.key === "Enter") formSubmitHandler(e);
        }}
        className={classes.formContainer}
      >
        {!register ? (
          <>
            <div className={classes.inputContainer}>
              <label>
                <MdAlternateEmail color="#008569" size="2.4rem" />
              </label>

              <input
                type="email"
                placeholder="Adres email"
                required
                onChange={(e) => {
                  emailChangeHandler(e);
                  setAuthError(false);
                }}
                onBlur={emailBlurHandler}
                value={email}
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
                minLength="6"
                onChange={(e) => {
                  passwordChangeHandler(e);
                  setAuthError(false);
                }}
                onBlur={passwordBlurHandler}
                value={password}
              />
            </div>
            {(passwordHasError || emailHasError) && (
              <p className={classes.incorrectInputs}>
                Wpisane wartości są nieprawidłowe.
              </p>
            )}
          </>
        ) : (
          <>
            <div className={classes.inputContainer}>
              <label>
                <MdPersonOutline color="#008569" size="2.4rem" />
              </label>
              <input
                type="text"
                placeholder="Nickname"
                required
                onChange={(e) => {
                  setNickName(e.target.value);
                }}
                value={nickName}
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
                onChange={(e) => {
                  emailChangeHandler(e);
                  setAuthError(false);
                }}
                onBlur={emailBlurHandler}
                value={email}
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
                minLength="6"
                onChange={(e) => {
                  passwordChangeHandler(e);
                  setAuthError(false);
                }}
                onBlur={passwordBlurHandler}
                value={password}
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
                minLength="6"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>
          </>
        )}
      </form>
      <div className={classes.action}>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className={classes.actions}>
            <button
              onClick={() => {
                setRegister(!register);
              }}
              className={` ${classes.newAccBtn} ${classes.lgnBtn}`}
            >
              {!register ? "Rejestracja" : "Powrót"}
            </button>
            <button
              disabled={!formIsValid}
              className={classes.lgnBtn}
              onClick={formSubmitHandler}
            >
              {!register ? "Zaloguj" : "Zarejestruj"}
            </button>
          </div>
        )}
        {!register && authError && (
          <p className={classes.errorMsg}>{authError}</p>
        )}
      </div>
      {registerStatus && (
        <div>
          <h3>Utwrzono nowe konto!</h3>
        </div>
      )}
    </>
  );
}

export default AuthForm;
