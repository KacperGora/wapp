import React, { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import Navbar from "../../Layout/Navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";

import classes from "./MainPage.module.css";
import { auth, db } from "../../firebase";
function MainPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "users"),
      where("uid", "not-in", [auth.currentUser?.uid])
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className={classes.MainPageContainer}>
      <Navbar />
      <MainContent users={users} />
    </div>
  );
}

export default MainPage;
