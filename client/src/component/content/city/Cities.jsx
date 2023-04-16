import React from "react";
import CityItem from "./CityItem";
import { dataCity } from "./data";
import styles from "../boxContainer.module.css";

const Cities = () => {
  const data = dataCity;
  return (
    <div className={styles.box}>
      {data.map((ct, id) => {
        return <CityItem key={id} city={ct} />;
      })}
    </div>
  );
};

export default Cities;
