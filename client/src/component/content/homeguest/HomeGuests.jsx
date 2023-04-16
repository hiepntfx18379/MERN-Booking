import da from "date-fns/esm/locale/da/index.js";
import React from "react";
import styles from "../boxContainer.module.css";
import { dataHotel } from "./data";
import HomeGuestItem from "./HomeGuestItem";

const HomeGuests = () => {
  const data = dataHotel;
  return (
    <div className={styles.box}>
      {data.map((hotel, id) => {
        return <HomeGuestItem key={id} item={hotel} />;
      })}
    </div>
  );
};

export default HomeGuests;
