import React from "react";
import styles from "../Styles/BottomButton.module.css";
function DownloadCount({ downloadCount }) {
  return <div className={`${styles.btn} ${styles.downloadCount} `}>Downloads : {downloadCount}</div>;
}

export default DownloadCount;
