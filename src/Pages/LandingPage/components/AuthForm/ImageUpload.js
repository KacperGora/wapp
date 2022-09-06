import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import React, { useState } from "react";
import { storage } from "../../../../firebase";
function ImageUpload() {
  const [file, setFile] = useState();
  const [progress, setProgress] = useState(0);
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
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
      }
    );
  };
  file && uploadFiles()
  console.log(progress);
  return (
    <div>
      <input onChange={(e) => setFile(e.target.files[0])} type={"file"} />
      {progress}
    </div>
  );
}

export default ImageUpload;
