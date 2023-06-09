import React from "react";
import styles from "./CityItem.module.css";

const CityItem = ({ city, id, data }) => {
  return (
    <div className={styles.boxCity}>
      <img className={styles.image} src={city.image} />
      <div className={styles.text}>
        <div className={styles.nameCity}>{city.name}</div>
        <div className={styles.subText}>{data[id]} Properties</div>
      </div>
    </div>
  );
};

export default CityItem;
