import React, { memo } from "react";
import styles from "./img_slide1.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./customize-slide.css";

const ImgSlide1 = (props) => {
  return (
    <div className={styles.imgSlide}>
      <AliceCarousel
        autoPlay
        autoPlayInterval="4000"
        infinite={true}
        disableButtonsControls={true}
      >
        <div className={styles.imgWrap}>
          <img
            className={styles.img1}
            src="/images/movie_app_images/movie_app1.png"
            alt="movie_app1.png"
          />
        </div>
        <div className={styles.imgWrap}>
          <img
            className={styles.img2}
            src="/images/movie_app_images/movie_app2.png"
            alt="movie_app2.png"
          />
        </div>
        <div className={styles.imgWrap}>
          <img
            className={styles.img3}
            src="/images/movie_app_images/movie_app3.png"
            alt="movie_app3.png"
          />
        </div>
        <div className={styles.imgWrap}>
          <img
            className={styles.img4}
            src="/images/movie_app_images/movie_app4.png"
            alt="movie_app4.png"
          />
        </div>
      </AliceCarousel>
    </div>
  );
};

export default memo(ImgSlide1);
