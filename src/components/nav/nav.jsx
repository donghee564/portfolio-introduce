import React, { memo } from "react";
import styles from "./nav.module.css";

const Nav = ({ handleShowMenu, showMenu }) => {
  const handleListClick = () => {
    handleShowMenu();
  };

  return (
    <nav className={styles.nav}>
      {/* <img
        className={styles.logo}
        src="/images/logo_icon.png"
        alt="logo_icon.png"
      /> */}
      <ul onClick={handleListClick} className={styles.list}>
        <li className={showMenu ? styles.closeBtn1 : styles.line1}></li>
        <li className={showMenu ? styles.closeBtn2 : styles.line2}></li>
        <li className={showMenu ? styles.closeBtn3 : styles.line3}></li>
      </ul>
    </nav>
  );
};

export default memo(Nav);
