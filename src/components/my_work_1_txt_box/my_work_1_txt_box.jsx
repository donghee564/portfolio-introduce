import React from "react";
import styles from "./my_work_1_txt_box.module.css";

const MyWork1TxtBox = ({ scrollIndex }) => {
  return (
    <div className={styles.txtBoxWrap}>
      <div
        className={
          scrollIndex.to === 1
            ? `${styles.txtBox} ${styles.onScroll}`
            : styles.txtBox
        }
      >
        <p className={styles.overview}>
          TMDb 퍼블릭 API를 활용한 영화, TV시리즈 순위, 정보, 검색 SPA 입니다.
        </p>
        <div className={styles.info}>
          <ul>
            <li className={styles.listTit}>사용 라이브러리</li>
            <li className={styles.list}>axios</li>
            <li className={styles.list}>react-router</li>
            <li className={styles.list}>bootstrap-icons</li>
            <li className={styles.list}>react-responsive-carousel</li>
          </ul>
        </div>
        <ul className={styles.subInfoWrap}>
          <li className={styles.subInfo}>
            <p>
              <span className={styles.num}>21</span> 일
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
              <span className={styles.num}>90</span> %
            </p>
            <p>디자인</p>
          </li>
        </ul>
        <div className={styles.funcWrap}>
          <p className={styles.funcTit}>기능요약</p>
          <p className={styles.func}>
            영화, tv 시리즈 인기, 트랜딩 순위. 영화, tv 시리즈, 인물 정보 검색.
            장르별 인기 순위.
          </p>
        </div>
        <div className={styles.btnsWrap}>
          <button className={styles.btns}>
            <a
              href="https://github.com/donghee564/TMDB_movie_app"
              target="blank"
            >
              REPO
            </a>
          </button>
          <button className={styles.btns}>
            <a
              href="https://donghee564.github.io/TMDB_movie_app/#/"
              target="blank"
            >
              데모
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyWork1TxtBox;
