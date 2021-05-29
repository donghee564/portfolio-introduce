import React, { memo } from "react";
import styles from "./img_slide3.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./customize-slide.css";

const ImgSlide3 = (props) => {
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
            src="/images/chase_bank_images/chase_main.jpg"
            alt="chase_main.jpg"
          />
        </div>
        <div className={styles.imgWrap}>
          <img
            className={styles.img2}
            src="/images/chase_bank_images/chase_sub1.jpg"
            alt="chase_sub1.jpg"
          />
        </div>
        <div className={styles.imgWrap}>
          <img
            className={styles.img3}
            src="/images/chase_bank_images/chase_sub2.jpg"
            alt="chase_sub2.jpg"
          />
        </div>
      </AliceCarousel>
    </div>
  );
};

export default memo(ImgSlide3);
