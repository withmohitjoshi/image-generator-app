import React from "react";
import styles from "../Styles/BottomButton.module.css";
function LikeCount({ likeCount }) {
  return <div className={`${styles.btn} ${styles.likeCount}`}>Likes : {likeCount}</div>;
}

export default LikeCount;
