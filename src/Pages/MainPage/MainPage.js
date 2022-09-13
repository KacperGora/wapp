import React, { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import Navbar from "../../Layout/Navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";

import classes from "./MainPage.module.css";
import { auth, db } from "../../firebase";

function MainPage() {
  const [friends, setFriends] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    let user = [];
    const q = query(
      collection(db, `users`),
      where("uid", "in", [auth.currentUser?.uid])
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        user.push(doc.data());
      });
      setUser(...user);
      // setUsers(friends);
    });
    return () => unsubscribe();
  }, []);
console.log(user)
  useEffect(() => {
    const usersFriends = [];
    user?.friends?.forEach((friend) => {
      const q = query(collection(db, `users`), where("email", "==", friend.toLowerCase()));
      const unsub = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          usersFriends.push(doc.data());
          // if (friends) setFriends(doc.data());
          // else {
          //   setFriends((currState) => {
          //     return [currState, doc.data()];
          //   });
          // }
        });
        console.log(usersFriends);
        setFriends(usersFriends);
      });
    });
  }, [user]);
  console.log(friends);
  return (
    <div className={classes.MainPageContainer}>
      <Navbar />
      <MainContent users={friends} />
    </div>
  );
}

export default MainPage;
