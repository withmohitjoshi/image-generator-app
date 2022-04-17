import React, { useState } from "react";
import { saveAs } from "file-saver";
import styles from "../Styles/BottomButton.module.css";
import { ACCESS_KEY } from "../Utils/accesskey";
import axios from "axios";
function DownloadImage({ imageId }) {
  const [imageUrl, setImageUrl] = useState("");
  const URL = `https://api.unsplash.com/photos/${imageId}/download?client_id=${ACCESS_KEY}`;

  axios.get(URL).then((val) => {
    setImageUrl(val.data.url);
  });

  const handleDownload = () => {
    saveAs(imageUrl, `image_${imageId}.jpg`);
  };

  return (
    <div
      className={`${styles.btn} ${styles.downloadImage}`}
      onClick={handleDownload}
    >
      Download Image
    </div>
  );
}

export default DownloadImage;
