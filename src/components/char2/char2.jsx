import React from "react";
import styles from "./char2.module.css";

const Char2 = ({ word }) => {
  return (
    <p className={styles.word}>
      {word.split("").map((char, index) => {
        return (
          <span
            aria-hidden="true"
            className={styles.char}
            style={{ animationDelay: 1.5 + index / 20 + "s" }}
            key={index}
          >
            {char}
          </span>
        );
      })}
    </p>
  );
};
export default Char2;
