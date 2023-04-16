import React from "react";

import styles from "./BrowseItem.module.css";

const BrowseItem = ({ type }) => {
  return (
    <div className={styles.boxItem}>
      <img src={type.image} className={styles.image} alt="" />
      <div className={styles.boxText}>
        <div className={styles.name}>{type.name}</div>
        <div className={styles.count}>{type.count} hotels</div>
      </div>
    </div>
  );
};

export default BrowseItem;
