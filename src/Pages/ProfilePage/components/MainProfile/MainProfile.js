import React from "react";
import { useParams } from "react-router-dom";
import ImageUploader from "../../../../components/helpers/ImageUploader/ImageUploader";
import classes from "./MainProfile.module.css";
function MainProfile() {
  const { userId } = useParams();

  return (
    <div className={classes.profileContainer}>
      hello {userId}
      <section className={classes.imgInput}>
        <h3>Zmień zdjęcie profilowe.</h3>
        <ImageUploader />
      </section>
    </div>
  );
}

export default MainProfile;
