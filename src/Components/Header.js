import React from "react";
import styles from "../Styles/header.module.css";
function Header() {
  return (
    <div className={styles.header}>
      <a href="#">
        <h2>Random Image</h2>
      </a>
    </div>
  );
}

export default React.memo(Header);
