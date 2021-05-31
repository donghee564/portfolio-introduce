import React, { memo } from "react";
import { Github, Envelope, PersonFill } from "react-bootstrap-icons";
import styles from "./menu_list.module.css";

const MenuList = ({ handleMenuClick }) => {
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
            <PersonFill />
            <p> Donghee Han</p>
          </li>
          <li>
            <Envelope />
            <p> poohaha8974@gmail.com</p>
          </li>
          <li>
            <Github />
            <p>
              <a href="https://github.com/donghee564" target="blank">
                {" "}
                https://github.com/donghee564
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(MenuList);
