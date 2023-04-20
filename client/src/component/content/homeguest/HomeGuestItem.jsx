import React from "react";
import styles from "./HomeGuestItem.module.css";

const HomeGuestItem = ({ item, dataH, id }) => {
  return (
    <div className={styles.boxHotel}>
      <img src={item.photos[2]} className={styles.image} />
      <div className={styles.boxText}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.city}>{item.city}</div>
        <div className={styles.price}>Starting from ${item.cheapestPrice}</div>
        <div className={styles.rateBox}>
          <span className={styles.score}>{dataH[id].rate}</span>
          <span className={styles.type}>{dataH[id].type}</span>
        </div>
      </div>
    </div>
  );
};

export default HomeGuestItem;
