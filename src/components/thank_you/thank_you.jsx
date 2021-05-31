import React from "react";
import styles from "./thank_you.module.css";

const ThankYou = (props) => (
  <section className={styles.wrap}>
    <h1 className={styles.title}>
      Thank You! <span className={styles.smile}>😊</span>
    </h1>
    <ul>
      <li className={styles.contacts}>
        Name<span>Donghee Han</span>
      </li>
      <li className={styles.contacts}>
        E-mail<span>poohaha8974@gmail.com</span>
      </li>
      <li className={styles.contacts}>
        Github
        <span>
          <a href="https://github.com/donghee564">
            https://github.com/donghee564
          </a>
        </span>
      </li>
    </ul>
    <div className={styles.info}>
      <h3>Information about this page</h3>
      <p>create-react-app</p>
      <p>Responsive</p>
    </div>
    <button className={styles.btn}>
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
