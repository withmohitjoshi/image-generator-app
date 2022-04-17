import React from "react";
import styles from "../Styles/BottomButton.module.css";
function NewImageButton({ callback }) {
  return (
    <div
      onClick={callback}
      className={`${styles.btn} ${styles.newImage}`}
    >
      New Image
    </div>
  );
}

export default NewImageButton;
