import React from "react";
import { Github, Envelope, PhoneVibrate } from "react-bootstrap-icons";
import styles from "./nav.module.css";

const Nav = ({ handleShowMenu }) => {
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
        <li className={styles.line1}></li>
        <li className={styles.line2}></li>
        <li className={styles.line3}></li>
      </ul>
      <ul className={styles.sns}>
        <li className={styles.gitHub}>
          <Github size={22} color="#ececec" />
        </li>
        <li className={styles.gitHub}>
          <PhoneVibrate size={22} color="#ececec" />
        </li>
        <li className={styles.envelope}>
          <Envelope size={22} color="#ececec" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
