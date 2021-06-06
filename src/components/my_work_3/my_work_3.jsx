import React, { memo } from "react";
import ImgSlide3 from "../img_slide3/img_slide3";
import MyWork3TxtBox from "../my_work_3_txt_box/my_work_3_txt_box";
import styles from "./my_work_3.module.css";
import bg3 from "../../images/chase_bank_bg.jpg";

const MyWork3 = ({ scrollIndex }) => {
  return (
    <section
      className={styles.mywork1}
      style={{
        background: `url(${bg3}) bottom center/cover fixed`,
      }}
    >
      <p className={styles.pageNation}>
        My Work # <span className={styles.currPage}>3</span> / 3
      </p>
      <div className={styles.ctnBg}>
        <div className={styles.subTitWrap}>
          <h3 className={styles.subTit}>
            <span className={styles.currNum}>#03</span> Chase Bank Renewal
          </h3>
          <p className={styles.subTxt}>HTML, CSS, JS, jQuery</p>
        </div>
        <div className={styles.ctnWrap}>
          <MyWork3TxtBox scrollIndex={scrollIndex} />
          <div
            className={
              scrollIndex.to === 3
                ? `${styles.imgSlideWrap} ${styles.onScroll}`
                : styles.imgSlideWrap
            }
          >
            <ImgSlide3 />
          </div>
        </div>
        <p className={styles.hoverMe}>hover image</p>
      </div>
    </section>
  );
};

export default memo(MyWork3);
