import React, { useEffect, useState } from "react";
import styles from "../Styles/imagecomponent.module.css";

function ImageComponent({ url }) {

  return (
    <>
      <div className={styles.imageComponent}>
        {url.length != 0 ? (
          <img className={styles.image} src={url} />
        ) : (
          <h2>loading</h2>
        )}
      </div>
    </>
  );
}

export default ImageComponent;
