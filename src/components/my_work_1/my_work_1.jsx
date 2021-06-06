import React, { memo, useEffect } from "react";
import ImgSlide1 from "../img_slide1/img_slide1";
import MyWork1TxtBox from "../my_work_1_txt_box/my_work_1_txt_box";
import styles from "./my_work_1.module.css";
import bg1 from "../../images/page_movie_bg.jpg";

const MyWork1 = ({ scrollIndex }) => {
  useEffect(() => {
    if (scrollIndex.to === 1) {
    }
  }, [scrollIndex]);

  return (
    <section
      className={styles.myWork1}
      style={{
        background: `url(${bg1}) bottom center/cover fixed`,
      }}
    >
      <p className={styles.pageNation}>
        My Work # <span className={styles.currPage}>1</span> / 3
      </p>
      <div className={styles.ctnBg}>
        <div className={styles.subTitWrap}>
          <h3 className={styles.subTit}>
            <span className={styles.currNum}>#01</span> TMDb Movie App
          </h3>
          <p className={styles.subTxt}>create-react-app</p>
        </div>
        <div className={styles.ctnWrap}>
          <MyWork1TxtBox scrollIndex={scrollIndex} />
          <div
            className={
              scrollIndex.to === 1
                ? `${styles.imgSlideWrap} ${styles.onScroll}`
                : styles.imgSlideWrap
            }
          >
            <ImgSlide1 />
          </div>
        </div>
        <p className={styles.hoverMe}>hover image</p>
      </div>
    </section>
  );
};

export default memo(MyWork1);
