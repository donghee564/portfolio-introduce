import React from "react";
import styles from "./img_slide_1.module.css";

const ImgSlide1 = (props) => {
  return (
    <div className={styles.imgSlide}>
      <img
        className={styles.img1}
        src="/images/movie_app_images/movie_app.png"
        alt="movie_app1.png"
      />
      {/* <img
        className={styles.img2}
        src="/images/movie_app_images/movie_app2.png"
        alt="movie_app2.png"
      />
      <img
        className={styles.img3}
        src="/images/movie_app_images/movie_app3.png"
        alt="movie_app3.png"
      />
      <img
        className={styles.img4}
        src="/images/movie_app_images/movie_app4.png"
        alt="movie_app4.png"
      /> */}
    </div>
  );
};

export default ImgSlide1;
