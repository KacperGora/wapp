import { arrayUnion, deleteDoc, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import { auth, db } from "../../../../../firebase";

import classes from "./RequestList.module.css";
function RequestList({ request }) {
  const dismissHandler = async (id) => {
    await deleteDoc(doc(db, "requests", id));
  };

  const acceptHandler = async (reqId, mailFrom, fromId, mailTo, toId) => {
    const userRef = doc(db, "users", fromId);
    await updateDoc(userRef, {
      friends: arrayUnion(mailTo),
    });
    const userRef2 = doc(db, "users", toId);
    await updateDoc(userRef2, {
      friends: arrayUnion(mailFrom),
    });
    await deleteDoc(doc(db, "requests", reqId));
  };

  return (
    <ul className={classes.allChatItems}>
      {request.length > 0 &&
        request.map((req) => (
          <div className={classes.request}>
            Wysłano od: {req.data.from}
            <div className={classes.actions}>
              <HiOutlinePlus
                onClick={() =>
                  acceptHandler(
                    req.id,
                    req.data.from,
                    req.data.fromId,
                    req.data.to,
                    req.data.toId
                  )
                }
                title="Zaakceptuj"
                className={classes.icon}
              />
              <HiOutlineMinus
                onClick={() => dismissHandler(req.id)}
                title="Odrzuć"
                className={classes.icon}
              />
            </div>
          </div>
        ))}
    </ul>
  );
}

export default RequestList;
