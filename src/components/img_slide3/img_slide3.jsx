import React, { memo } from "react";
import styles from "./img_slide3.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./customize-slide.css";
import chaseSlide1 from "../../images/chase_bank_images/chase_main.jpg";
import chaseSlide2 from "../../images/chase_bank_images/chase_sub1.jpg";
import chaseSlide3 from "../../images/chase_bank_images/chase_sub2.jpg";

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
          <img className={styles.img1} src={chaseSlide1} alt="chase_main.jpg" />
        </div>
        <div className={styles.imgWrap}>
          <img className={styles.img2} src={chaseSlide2} alt="chase_sub1.jpg" />
        </div>
        <div className={styles.imgWrap}>
          <img className={styles.img3} src={chaseSlide3} alt="chase_sub2.jpg" />
        </div>
      </AliceCarousel>
    </div>
  );
};

export default memo(ImgSlide3);
