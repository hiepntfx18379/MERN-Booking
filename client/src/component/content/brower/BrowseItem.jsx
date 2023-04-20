import React from "react";

import styles from "./BrowseItem.module.css";

const BrowseItem = ({ image, id, data }) => {
  return (
    <div className={styles.boxItem}>
      <img src={image.image} className={styles.image} alt="" />
      <div className={styles.boxText}>
        <div className={styles.name}>{data[id].type}</div>
        <div className={styles.count}>
          {data[id].count} {data[id].type}
        </div>
      </div>
    </div>
  );
};

export default BrowseItem;
