import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import ImageComponent from "./Components/ImageComponent";
import styles from "./Styles/App.module.css";
import LikeCount from "./Components/LikeCount";
import DownloadCount from "./Components/DownloadCount";
import NewImageButton from "./Components/NewImageButton";
import DownloadImage from "./Components/DownloadImage";
import { ACCESS_KEY } from "./Utils/accesskey";
import axios from "axios";
function App() {
  const URL = `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}`;
  const [imageData, setImageData] = useState();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleRequest = () => {
    setIsLoading(true)
    axios
      .get(URL)
      .then((res) => {
        return res.data;
      })
      .then((val) => {
        setImageData(val);
        setIsLoading(false)
      })
      .catch((error) => {
        setHasError(true);
      });
  };
  useEffect(() => {
    handleRequest();
  }, []);
  return (
    <>
      <div className={styles.app}>
        <Header />
        {imageData !== undefined ? (
          <>
            <ImageComponent url={imageData.urls.regular} isLoading={isLoading}/>
            <div className={styles.bottomButtons}>
              <LikeCount likeCount={imageData.likes} />
              <DownloadCount downloadCount={imageData.downloads} />
              <NewImageButton callback={handleRequest} />
              <DownloadImage imageId={imageData.id} />
            </div>
          </>
        ) : (
          <>
            {hasError === false ? (
              <p>Loading</p>
            ) : (
              <>
                {" "}
                <p>Something went wrong</p>
                <p>Reload the page</p>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
