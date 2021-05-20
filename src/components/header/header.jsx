import React from "react";
import styles from "./header.module.css";

const Header = (props) => (
  <header
    // style={{
    //   background: "url('images/header-bg.jpg') center center/cover fixed",
    // }}
    className={styles.header}
  >
    <div className={styles.bgLayer}>
      <div className={styles.titleBox}>
        <p className={styles.welcome}>Welcome to</p>
        <p className={styles.donghee}>Donghee's</p>
        <p className={styles.portfolio}>Portfolio</p>
      </div>
    </div>
  </header>
);

export default Header;
