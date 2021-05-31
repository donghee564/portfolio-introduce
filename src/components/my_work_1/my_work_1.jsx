import React, { memo } from "react";
import ImgSlide1 from "../img_slide1/img_slide1";
import MyWork1TxtBox from "../my_work_1_txt_box/my_work_1_txt_box";
import styles from "./my_work_1.module.css";

const MyWork1 = (props) => {
  return (
    <section
      className={styles.myWork1}
      style={{
        background: "url('images/page_movie_bg.jpg') bottom center/cover fixed",
      }}
    >
      <p className={styles.pageNation}>
        My Work # <span className={styles.currPage}>1</span> / 3
      </p>
      <div className={styles.ctnBg}>
        <div className={styles.ctnWrap}>
          <div className={styles.subTitWrap}>
            <h3 className={styles.subTit}>
              <span className={styles.currNum}>#01</span> TMDb Movie App
            </h3>
            <p className={styles.subTxt}>create-react-app</p>
          </div>
          <MyWork1TxtBox />
          <div className={styles.imgSlideWrap}>
            <p className={styles.hoverMe}>hover image</p>
            <ImgSlide1 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(MyWork1);
