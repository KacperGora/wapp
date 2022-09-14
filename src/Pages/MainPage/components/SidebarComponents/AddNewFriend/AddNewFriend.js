import React, { useEffect, useState } from "react";
import { MdPersonAddAlt } from "react-icons/md";
import { collection, onSnapshot, query, addDoc } from "firebase/firestore";
import { auth, db } from "../../../../../firebase";
import classes from "./AddNewFriend.module.css";

const AddNewFriend = () => {
  const [userInput, setUserInput] = useState();
  const [allUsers, setAllUsers] = useState([]);
  const [noUser, setNoUser] = useState(false);
  useEffect(() => {
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setAllUsers(users);
    });
  }, [userInput]);
  // useEffect(() => {
  //   if (

  //   ) {
  //     setNoUser(true);
  //   }
  // }, [allUsers, userInput]);
  useEffect(() => {
    if (
      allUsers.filter((user) =>
        user.email?.toLowerCase().includes(userInput?.toLowerCase())
      ).length === 0 &&
      userInput !== ""
    )
      setNoUser(true);
    else setNoUser(false);
  }, [allUsers, userInput]);

  const friendToBe = allUsers.filter((user) =>
    user.email?.toLowerCase().includes(userInput)
  );

  const loggedUser = auth.currentUser.email;
  const addNewFriendSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const reqRef = await addDoc(collection(db, "requests"), {
        from: loggedUser,
        fromId: auth.currentUser.uid,
        toId: friendToBe[0].uid,
        to: userInput.toLowerCase(),
        pending: true,
        status: "not confirmed",
      });
    } catch (error) {
      console.log(error);
    }

    setUserInput("");
  };

  return (
    <form
      className={classes.formContainer}
      onSubmit={addNewFriendSubmitHandler}
    >
      <label htmlFor="addNewFriend">Dodaj znajomego</label>
      <input
        title="Dodaj znajomego"
        placeholder="Wpisz ID lub email znajomego"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      />
      <button className={classes.addAction} disabled={noUser}>
        <MdPersonAddAlt />
      </button>
      {noUser && <p>W bazie danych nie znaleziono użytkownika.</p>}
    </form>
  );
};

export default AddNewFriend;
