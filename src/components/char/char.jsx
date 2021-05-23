import React from "react";
import styles from "./char.module.css";

const Char = ({ word }) => {
  return (
    <p className={styles.word}>
      {word.split("").map((char, index) => {
        return (
          <span
            aria-hidden="true"
            className={styles.char}
            style={{ animationDelay: 0.5 + "s" }}
            key={index}
          >
            {char}
          </span>
        );
      })}
    </p>
  );
};
export default Char;
