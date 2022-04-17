import React, { useEffect, useState } from "react";
import styles from "../Styles/imagecomponent.module.css";

function ImageComponent({ url, isLoading }) {
  return (
    <>
      <div className={styles.imageComponent}>
        {isLoading === false ? (
          <img className={styles.image} src={url} />
        ) : (
          <h2>loading</h2>
        )}
      </div>
    </>
  );
}

export default ImageComponent;
