import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebase";

const useUploadImage = (file) => {
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImgUrl] = useState(null);
  useEffect(() => {
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
          getDownloadURL(uploadTask.snapshot.ref).then((url) => setImgUrl(url));
        }
      );
    };
    uploadFiles(file);
  }, [file]);
  return [progress, imageUrl];
};
export default useUploadImage