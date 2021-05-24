import React, { memo } from "react";
import ImgSlide1 from "../img_slide_1/img_slide_1";
import styles from "./my_work_1.module.css";

const MyWork1 = (props) => {
  return (
    <section className={styles.mywork1}>
      <h2 className={styles.title}>My Work #1</h2>
      <div className={styles.ctnWrap}>
        <ImgSlide1 />
        <div className={styles.txtBox}>
          <h3 className={styles.subTit}>TMDb Movie App</h3>
          <ul>
            <li className={styles.subTxt}>create-react-app</li>
            <li className={styles.subTxt}>퍼블리싱 100%</li>
          </ul>
          <p className={styles.overview}>
            TMDb 퍼블릭 API를 활용한 영화, TV시리즈 순위, 정보, 검색 웹 입니다.
            React-router 를 활용하여 만든 SPA 입니다.
          </p>
          <div className={styles.info}>
            {/* <ul>
              <li className={styles.listTit}>기능 요약</li>
              <li className={styles.list}>
                트랜딩, 인기 영화, tv 시리즈 순위.
              </li>
              <li className={styles.list}>장르별 영화, tv 시리즈 인기 순위.</li>
              <li className={styles.list}>My list 에 영화, tv 시리즈 추가.</li>
              <li className={styles.list}>영화, tv 시리즈, 인물 검색.</li>
            </ul> */}
            <ul>
              <li className={styles.listTit}>사용 라이브러리</li>
              <li className={styles.list}>- react-router</li>
              <li className={styles.list}>- axios</li>
              <li className={styles.list}>- bootstraop-icons</li>
              <li className={styles.list}>- react-responsive-carousel</li>
            </ul>
          </div>
          <div className={styles.btnsWrap}>
            <button className={styles.btns}>
              <a
                href="https://github.com/donghee564/TMDB_movie_app"
                target="blank"
              >
                Repo
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
    </section>
  );
};

export default memo(MyWork1);
