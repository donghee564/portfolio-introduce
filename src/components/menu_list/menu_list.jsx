import React, { memo } from "react";
import { Github, Envelope, PhoneVibrate } from "react-bootstrap-icons";
import styles from "./menu_list.module.css";

const MenuList = ({ handleMenuClick }) => {
  // const handleClick = (e) => {
  //   console.log();
  //   handleMenuClick(3);
  // };

  return (
    <div className={styles.menuList}>
      <ul className={styles.list}>
        <li
          onClick={() => {
            handleMenuClick(0);
          }}
          className={styles.listItems}
        >
          <p>Home</p>
        </li>
        <li
          onClick={() => {
            handleMenuClick(1);
          }}
          className={styles.listItems}
        >
          <p>TMDb Movie App</p>
        </li>
        <li
          onClick={() => {
            handleMenuClick(2);
          }}
          className={styles.listItems}
        >
          <p>Weather App</p>
        </li>
        <li
          onClick={() => {
            handleMenuClick(3);
          }}
          className={styles.listItems}
        >
          <p>Chase Bank renewal</p>
        </li>
      </ul>
      <div className={styles.contactWrap}>
        <h3>Contact</h3>
        <ul>
          <li>
            <a href="#">
              <Envelope />
              <p> poohaha8974@gmail.com</p>
            </a>
          </li>
          <li>
            <a href="#">
              <PhoneVibrate />
              <p> 010-7515-8974</p>
            </a>
          </li>
          <li>
            <a href="https://github.com/donghee564" target="blank">
              <Github />
              <p> https://github.com/donghee564</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(MenuList);
