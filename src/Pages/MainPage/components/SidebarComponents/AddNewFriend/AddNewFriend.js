import React, { useEffect, useState } from "react";
import {
  arrayUnion,
  collection,
  doc,
  onSnapshot,
  updateDoc,
  query,
} from "firebase/firestore";
import { auth, db } from "../../../../../firebase";

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
      allUsers.filter((user) => user.email.toLowerCase().includes(userInput))
        .length === 0
    )
      setNoUser(true);
    else setNoUser(false);
  }, [allUsers, userInput]);
  const addNewFriendSubmitHandler = async (e) => {
    e.preventDefault();
    const userRef = doc(db, "users", auth.currentUser.uid);

    await updateDoc(userRef, {
      friends: arrayUnion(userInput),
    });
    setUserInput("");
  };
  return (
    <form onSubmit={addNewFriendSubmitHandler}>
      <label htmlFor="addNewFriend">Dodaj znajomego</label>
      <input
        title="Dodaj znajomego"
        placeholder="Wpisz ID lub email znajomego"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      />
      <button disabled={noUser}>+</button>
      {noUser && <p>W bazie danych nie znaleziono użytkownika.</p>}
    </form>
  );
};

export default AddNewFriend;
