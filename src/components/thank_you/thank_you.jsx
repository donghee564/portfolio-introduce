import React from "react";
import styles from "./thank_you.module.css";

const ThankYou = ({ scrollIndex }) => (
  <section className={styles.wrap}>
    <div className={styles.titleBox}>
      <p
        className={
          scrollIndex.to === 4
            ? `${styles.title} ${styles.onScrollTitle}`
            : styles.title
        }
      >
        Thank You! <span className={styles.smile}>😊</span>
      </p>
    </div>
    <ul>
      <li className={styles.contactsWrap}>
        <p
          className={
            scrollIndex.to === 4
              ? `${styles.contacts} ${styles.onScrollContacts}`
              : styles.contacts
          }
        >
          Name<span>Donghee Han</span>
        </p>
      </li>
      <li className={styles.contactsWrap}>
        <p
          className={
            scrollIndex.to === 4
              ? `${styles.contacts} ${styles.onScrollContacts}`
              : styles.contacts
          }
        >
          E-mail<span>poohaha8974@gmail.com</span>
        </p>
      </li>
      <li className={styles.contactsWrap}>
        <p
          className={
            scrollIndex.to === 4
              ? `${styles.contacts} ${styles.onScrollContacts}`
              : styles.contacts
          }
        >
          Github
          <span>
            <a href="https://github.com/donghee564">
              https://github.com/donghee564
            </a>
          </span>
        </p>
      </li>
    </ul>
    <div className={styles.infoBox}>
      <div className={styles.infoWrap}>
        <h3
          className={
            scrollIndex.to === 4
              ? `${styles.info} ${styles.onScrollInfo}`
              : styles.info
          }
        >
          Information about this page
        </h3>
      </div>
      <div className={styles.infoWrap}>
        <p
          className={
            scrollIndex.to === 4
              ? `${styles.info} ${styles.onScrollInfo}`
              : styles.info
          }
        >
          create-react-app
        </p>
      </div>
      <div className={styles.infoWrap}>
        <p
          className={
            scrollIndex.to === 4
              ? `${styles.info} ${styles.onScrollInfo}`
              : styles.info
          }
        >
          Responsive
        </p>
      </div>
    </div>
    <button
      className={
        scrollIndex.to === 4
          ? `${styles.btn} ${styles.onScrollBtn}`
          : styles.btn
      }
    >
      <a
        href="https://github.com/donghee564/portfolio-introduce"
        target="blank"
      >
        Repo
      </a>
    </button>
  </section>
);

export default ThankYou;
