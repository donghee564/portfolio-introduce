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
            <Char2 word="Welcome to my portfolio page!π" />
          </div>
        </div>
        <div className={styles.bot}>
          <p className={styles.scrollDown}>scroll down</p>
        </div>
        <div className={styles.subTxtBox}>
          <p>μλνμΈμ. νλν¬μ κ°μΈ ν¬νΈν΄λ¦¬μ€ μ¬μ΄νΈ μλλ€.</p>
          <p>
            λ³Έ ν¬νΈν΄λ¦¬μ€ μ¬μ΄νΈλ Google Chrome, MicroSoft Edge, Safari
            λΈλΌμ°μ μ μ΅μ ν λμ΄ μμ΅λλ€.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
