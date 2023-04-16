import React from "react";
import styles from "./FooterItem.module.css";

const FototerItem = ({ arrInfo }) => {
  return (
    <div className={styles.boxFooter}>
      <ul>
        {arrInfo.map((li, i) => {
          return <li key={i}>{li}</li>;
        })}
      </ul>
    </div>
  );
};

export default FototerItem;
