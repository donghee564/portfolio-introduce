import React, { memo } from "react";
import MyWork2TxtBox from "../my_work_2_txt_box/my_work_2_txt_box";
import styles from "./my_work_2.module.css";

const MyWork2 = (props) => {
  return (
    <section
      className={styles.mywork1}
      style={{
        background: "url('images/bg.jpg') center center/cover fixed",
      }}
    >
      <p className={styles.pageNation}>
        My Work # <span className={styles.currPage}>2</span> / 3
      </p>
      <div className={styles.ctnBg}>
        <div className={styles.ctnWrap}>
          <div className={styles.subTitWrap}>
            <h3 className={styles.subTit}>
              <span className={styles.currNum}>#02</span> Weather App
            </h3>
            <p className={styles.subTxt}>create-react-app</p>
          </div>
          <div className={styles.imgSlideWrap}>
            <p className={styles.hoverMe}>hover image</p>
            <div className={styles.imgWrap}>
              <img
                className={styles.img}
                src="images/weather_app_images/weather_app_bg.png"
                alt="weather_app_bg.png"
              />
            </div>
          </div>
          <MyWork2TxtBox />
        </div>
      </div>
    </section>
  );
};

export default memo(MyWork2);
