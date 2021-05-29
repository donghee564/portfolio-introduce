import React from "react";
import styles from "./my_work_2_txt_box.module.css";

const MyWork2TxtBox = (props) => {
  return (
    <div className={styles.txtBoxWrap}>
      <div className={styles.txtBox}>
        <p className={styles.overview}>
          OpenWeatherMap 퍼블릭 API를 활용한 날씨 정보 웹 앱 입니다.
        </p>
        <div className={styles.info}>
          <ul>
            <li className={styles.listTit}>사용 라이브러리</li>
            <li className={styles.list}>axios</li>
            <li className={styles.list}>react-router</li>
            <li className={styles.list}>bootstrap-icons</li>
          </ul>
        </div>
        <ul className={styles.subInfoWrap}>
          <li className={styles.subInfo}>
            <p>
              <span className={styles.num}>14</span> 일
            </p>
            <p>제작 기간</p>
          </li>
          <li className={styles.subInfo}>
            <p>
              <span className={styles.num}>100</span> %
            </p>
            <p>기획</p>
          </li>
          <li className={styles.subInfo}>
            <p>
              <span className={styles.num}>100</span> %
            </p>
            <p>퍼블리싱</p>
          </li>
          <li className={styles.subInfo}>
            <p>
              <span className={styles.num}>100</span> %
            </p>
            <p>디자인</p>
          </li>
        </ul>
        <div className={styles.funcWrap}>
          <p className={styles.funcTit}>기능요약</p>
          <p className={styles.func}>
            현재 위치의 7일간 날씨 정보. 검색한 도시의 5일간 날씨 정보.
          </p>
          <p className={styles.func}>단위 선택(Celcius, Fahrenheit).</p>
        </div>
        <div className={styles.btnsWrap}>
          <button className={styles.btns}>
            <a href="https://github.com/donghee564/weather_app" target="blank">
              REPO
            </a>
          </button>
          <button className={styles.btns}>
            <a href="https://donghee564.github.io/weather_app/" target="blank">
              데모
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyWork2TxtBox;
