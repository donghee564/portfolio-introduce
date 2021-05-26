import React from "react";
import { X } from "react-bootstrap-icons";
import styles from "./menu_list.module.css";

const MenuList = ({ handleCloseMenu }) => {
  const handleClick = () => {
    handleCloseMenu();
  };

  return (
    <div className={styles.menuList}>
      <ul className={styles.list}>
        <li className={styles.listItems}>
          <p>Home</p>
        </li>
        <li className={styles.listItems}>
          <p>TMDb Movie App</p>
        </li>
        <li className={styles.listItems}>
          <p>Weather App</p>
        </li>
        <li className={styles.listItems}>
          <p>Chase Bank renewal</p>
        </li>
      </ul>
      <div className={styles.contactWrap}>
        <h3>Contact</h3>
        <ul>
          <li>poohaha8974@gmail.com</li>
          <li>010-7515-8974</li>
          <li>https://github.com/donghee564</li>
        </ul>
      </div>
      <img className={styles.logo} src="./images/logo.png" alt="logo.png" />
      <p className={styles.closeBtn} onClick={handleClick}>
        <X size={70} />
      </p>
    </div>
  );
};

export default MenuList;
