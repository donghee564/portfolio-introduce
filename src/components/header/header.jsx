import React from "react";
import Char from "../char/char";
import Char2 from "../char2/char2";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.bgLayer}>
        <div className={styles.center}>
          <img className={styles.logo} src="/images/logo.png" alt="logo.png" />
          <div className={styles.titleBox}>
            <Char word="Hi, I'm Donghee." />
            <Char2 word="Welcome to my portfolio page!😉" />
          </div>
        </div>
        <div className={styles.bot}>
          <p className={styles.scrollDown}>scroll down</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
