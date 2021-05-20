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
        <li className={styles.listItems}>Home</li>
        <li className={styles.listItems}>About</li>
        <li className={styles.listItems}>My Works</li>
        <li className={styles.listItems}>Contact</li>
      </ul>
      <p className={styles.closeBtn} onClick={handleClick}>
        <X size={70} />
      </p>
    </div>
  );
};

export default MenuList;
