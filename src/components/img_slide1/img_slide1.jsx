import React, { memo } from "react";
import styles from "./img_slide1.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./customize-slide.css";
import movieSlide1 from "../../images/movie_app_images/movie_app1.png";
import movieSlide2 from "../../images/movie_app_images/movie_app2.png";
import movieSlide3 from "../../images/movie_app_images/movie_app3.png";
import movieSlide4 from "../../images/movie_app_images/movie_app4.png";

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
          <img className={styles.img1} src={movieSlide1} alt="movie_app1.png" />
        </div>
        <div className={styles.imgWrap}>
          <img className={styles.img2} src={movieSlide2} alt="movie_app2.png" />
        </div>
        <div className={styles.imgWrap}>
          <img className={styles.img3} src={movieSlide3} alt="movie_app3.png" />
        </div>
        <div className={styles.imgWrap}>
          <img className={styles.img4} src={movieSlide4} alt="movie_app4.png" />
        </div>
      </AliceCarousel>
    </div>
  );
};

export default memo(ImgSlide1);
