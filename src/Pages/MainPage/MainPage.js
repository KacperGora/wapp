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
  const [myRequest, setMyRequest] = useState([]);

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
  console.log(friends);
  useEffect(() => {
    const usersFriends = [];
    user?.friends?.forEach((friend) => {
      const q = query(
        collection(db, `users`),
        where("email", "==", friend.toLowerCase())
      );
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

        setFriends(usersFriends);
      });
    });
  }, [user]);

  useEffect(() => {
    let myRequestsArray = [];
    const q = query(
      collection(db, `requests`),
      where("to", "in", [auth.currentUser.email])
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        myRequestsArray.push(doc.data());
      });
      setMyRequest(myRequestsArray);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className={classes.MainPageContainer}>
      <Navbar />

      <MainContent request={myRequest} users={friends} />
    </div>
  );
}

export default MainPage;
