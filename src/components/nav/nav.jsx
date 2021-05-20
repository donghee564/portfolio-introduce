import React from "react";
import { Github, Envelope } from "react-bootstrap-icons";
import styles from "./nav.module.css";

const Nav = ({ handleShowMenu }) => {
  const handleListClick = () => {
    handleShowMenu();
  };

  return (
    <nav className={styles.nav}>
      <ul onClick={handleListClick} className={styles.list}>
        <li className={styles.line1}></li>
        <li className={styles.line2}></li>
        <li className={styles.line3}></li>
      </ul>
      <ul className={styles.sns}>
        <li className={styles.gitHub}>
          <Github size={22} color="grey" />
        </li>
        <li className={styles.envelope}>
          <Envelope size={22} color="grey" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
