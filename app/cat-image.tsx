"use client";

import styles from "./page.module.css"
import { useState } from "react";
import { fetchImage } from "./fetch-image";

type CatImageProps= {
  url: string;
};

export function CatImage({ url }: CatImageProps) {
  const [ imageUrl, setImageUrl ] = useState(url)

  const refreshImage = async () => {
    setImageUrl("");
    const image = await fetchImage();
    setImageUrl(image.url);
  };
  return (
    <div className={styles.page}>
      <button onClick={refreshImage} className={styles.button}>
        他のニャンコも見る
      </button>
      <div className={styles.frame}>
      {imageUrl && <img src={imageUrl}/>}
      </div>
    </div>
  );
}