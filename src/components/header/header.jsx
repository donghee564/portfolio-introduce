import React from "react";
import Char from "../char/char";
import Char2 from "../char2/char2";
import styles from "./header.module.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header id="sectionHome" className={styles.header}>
      <div className={styles.bgLayer}>
        <div className={styles.center}>
          <img className={styles.logo} src={logo} alt="logo.png" />
          <div className={styles.titleBox}>
            <Char word="Hi, I'm Donghee." />
            <Char2 word="Welcome to my portfolio page!😉" />
          </div>
        </div>
        <div className={styles.bot}>
          <p className={styles.scrollDown}>scroll down</p>
        </div>
        <div className={styles.subTxtBox}>
          <p>안녕하세요. 한동희의 개인 포트폴리오 사이트 입니다.</p>
          <p>
            본 포트폴리오 사이트는 Google Chorome 브라우저에 최적화 되어
            있습니다.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
