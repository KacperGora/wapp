import React, { useEffect, useState } from "react";
import classes from "./ChatSendMessage.module.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../../../../firebase";
import { MdOutlineAttachFile } from "react-icons/md";

import uuid from "react-uuid";
import useUploadImage from "../../../../../hooks/useUploadImage";
function ChatSendMessage({ id }) {
  const [newMessage, setNewMessage] = useState("");
  const [file, setNewFile] = useState(null);
  const [progress, imageUrl, setImgUrl] = useUploadImage(file, "images");
  const [mediaLoading, setMediaLoading] = useState(false);
  const idMsg =
    auth.currentUser.uid > id
      ? `${auth.currentUser.uid + id}`
      : `${id + auth.currentUser.uid}`;

  const messageSendHandler = async (e) => {
    e.preventDefault();
    if (db) {
      if (newMessage.trim() !== "" || imageUrl) {
        await addDoc(collection(db, "messages", idMsg, "chat"), {
          text: newMessage || "",
          from: auth.currentUser.uid,
          to: id,
          createdAt: serverTimestamp(),
          id: uuid(),
          media: imageUrl || "",
        });
        setNewMessage("");
      }
    }

    setNewMessage("");
    setNewFile(null);
    setMediaLoading(false);
    setImgUrl(null);
  };

  useEffect(() => {
    progress !== 0 ? setMediaLoading(true) : setMediaLoading(false);
    progress === 100 && setMediaLoading(false);
  }, [progress]);

  return (
    <form className={classes.newMessageForm} onSubmit={messageSendHandler}>
      <input
        type="text"
        value={newMessage}
        placeholder="Wpisz wiadomość"
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <label title="Dodaj zdjęcie" htmlFor="attachment">
        <MdOutlineAttachFile className={classes.attach} />
      </label>
      <input
        id="attachment"
        onChange={(e) => setNewFile(e.target.files[0])}
        type="file"
        style={{ display: "none" }}
      ></input>

      <button disabled={mediaLoading} className={classes.sendBtn}>
        {mediaLoading ? "Przesyłanie" : "Wyślij"}
      </button>
    </form>
  );
}

export default ChatSendMessage;
