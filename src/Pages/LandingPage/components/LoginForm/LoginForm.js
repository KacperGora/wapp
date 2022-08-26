import React, { useState } from "react";
import "./LoginForm.css";

import {
  MdAlternateEmail,
  MdOutlineLock,
  MdPersonOutline,
} from "react-icons/md";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../../../firebase";
import Spinner from "../../../../components/UI/Spinner/Spinner";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!register) {
        const logUser = await signInWithEmailAndPassword(auth, email, password);
        setEmail("");
        setPassword("");
        if (logUser) setStatus(true);
      } else if (register) {
        const newUser = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (newUser) setStatus(true);
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      const { code, message } = error;
      console.log(code);
      setStatus(false);
      throw new Error(message);
    }
  };

  return (
    <form onSubmit={formSubmitHandler} className="formContainer">
      {!register ? (
        <>
          <div className="inputContainer">
            <label>
              <MdAlternateEmail color="#008569" size="2.4rem" />
            </label>
            <input
              type="email"
              placeholder="Adres email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div className="inputContainer">
            <label>
              <MdOutlineLock color="#008069" size="2.4rem" />
            </label>
            <input
              type="password"
              placeholder="Hasło"
              required
              minLength="6"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </>
      ) : (
        <>
          <div className="inputContainer">
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
          <div className="inputContainer">
            <label>
              <MdAlternateEmail color="#008569" size="2.4rem" />
            </label>
            <input
              type="email"
              placeholder="Adres email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div className="inputContainer">
            <label>
              <MdOutlineLock color="#008069" size="2.4rem" />
            </label>
            <input
              type="password"
              placeholder="Hasło"
              required
              minLength="6"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="inputContainer">
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
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="actions">
          <button
            onClick={() => {
              setRegister(!register);
            }}
            className="lgnBtn newAccBtn"
          >
            {!register ? "Rejestracja" : "Powrót"}
          </button>
          <button className="lgnBtn">
            {!register ? "Zaloguj" : "Zarejestruj"}
          </button>
        </div>
      )}
    </form>
  );
}

export default LoginForm;
