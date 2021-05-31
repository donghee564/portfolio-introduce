import React from "react";
import styles from "./my_work_3_txt_box.module.css";

const MyWork3TxtBox = (props) => {
  return (
    <div className={styles.txtBoxWrap}>
      <div className={styles.txtBox}>
        <p className={styles.overview}>
          HTML, CSS, Java Script, jQuery를 활용한 Chase Bank Renewal 페이지
          입니다.
        </p>
        {/* <div className={styles.info}>
          <ul>
            <li className={styles.listTit}>사용 라이브러리</li>
            <li className={styles.list}>axios</li>
            <li className={styles.list}>react-router</li>
            <li className={styles.list}>bootstrap-icons</li>
            <li className={styles.list}>react-responsive-carousel</li>
          </ul>
        </div> */}
        <ul className={styles.subInfoWrap}>
          <li className={styles.subInfo}>
            <p>
              <span className={styles.num}>27</span> 일
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
              <span className={styles.num}>60</span> %
            </p>
            <p>디자인</p>
          </li>
        </ul>
        <div className={styles.funcWrap}>
          <p className={styles.funcTit}>기능요약</p>
          <p className={styles.func}>
            드랍다운 메뉴, 메인베너 슬라이드, 팝업 모달.
          </p>
          <p className={styles.func}>반응형 페이지(main, sub1)</p>
        </div>
        <div className={styles.btnsContainer}>
          <div className={styles.btnsWrap}>
            <button className={styles.btns}>
              <a href="https://github.com/donghee564/chase-bank" target="blank">
                REPO
              </a>
            </button>
            <button className={styles.btns}>
              <a
                href="https://donghee564.github.io/chase-bank/chase_main"
                target="blank"
              >
                DEMO MAIN
              </a>
            </button>
          </div>
          <div className={styles.btnsWrap2}>
            <button className={styles.btns}>
              <a
                href="https://donghee564.github.io/chase-bank/chase_sub1"
                target="blank"
              >
                DEMO SUB 1
              </a>
            </button>
            <button className={styles.btns}>
              <a
                href="https://donghee564.github.io/chase-bank/chase_sub2"
                target="blank"
              >
                DEMO SUB 2
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork3TxtBox;
