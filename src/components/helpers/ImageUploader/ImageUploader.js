import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { auth, storage } from "../../../firebase";
import classes from "./ImageUploader.module.css";
function ImageUploader() {
  const [file, setFile] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [progress, setProgress] = useState(0);

  useEffect(() => {}, [progress]);
  const uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/avatars/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => setImageUrl(url));
      }
    );
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    file && uploadFiles(file);
    if (imageUrl) {
      await updateProfile(auth.currentUser, {
        photoURL: imageUrl,
      });
    }
  };

  return (
    <div className={classes.inputContainer}>
      <form className={classes.form} onSubmit={(e) => submitHandler(e)}>
        <input
          type={"file"}
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <button>Wyślij</button>
      </form>
    </div>
  );
}

export default ImageUploader;
