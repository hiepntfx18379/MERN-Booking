import React from "react";
import styles from "./HomeGuestItem.module.css";

const HomeGuestItem = ({ item }) => {
  return (
    <div className={styles.boxHotel}>
      <img src={item.photos[0]} className={styles.image} />
      <div className={styles.boxText}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.city}>{item.city}</div>
        <div className={styles.price}>Starting from ${item.cheapestPrice}</div>
        <div className={styles.rateBox}>
          <span className={styles.price}> Excellent </span>
          <span className={styles.score}> {item.rate}</span>
          <span className={styles.type}>{item.type}</span>
        </div>
      </div>
    </div>
  );
};

export default HomeGuestItem;
