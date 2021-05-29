import React, { memo } from "react";
import styles from "./img_slide_3.module.css";
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
            src="/images/chase_bank_images/chase_main.png"
            alt="chase_main.png"
          />
        </div>
        <div className={styles.imgWrap}>
          <img
            className={styles.img2}
            src="/images/chase_bank_images/chase_sub1.png"
            alt="chase_sub1.png"
          />
        </div>
        <div className={styles.imgWrap}>
          <img
            className={styles.img3}
            src="/images/chase_bank_images/chase_sub2.png"
            alt="chase_sub2.png"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default memo(ImgSlide1);
