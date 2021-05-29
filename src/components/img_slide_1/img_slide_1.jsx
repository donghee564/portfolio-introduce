import React, { memo } from "react";
import styles from "./img_slide_1.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./customize-carousel.css";

const ImgSlide1 = (props) => {
  return (
    <div className={styles.imgSlide}>
      <Carousel
        showArrows={false}
        showThumbs={false}
        autoPlay={true}
        stopOnHover={true}
        infiniteLoop={true}
        interval={4000}
        showStatus={false}
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
      </Carousel>
    </div>
  );
};

export default memo(ImgSlide1);
