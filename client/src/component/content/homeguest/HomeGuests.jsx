import React from "react";
import styles from "../boxContainer.module.css";
import { dataHotel } from "./data";
import HomeGuestItem from "./HomeGuestItem";
import useFetch from "../../../hookCustome/fetchData";

const HomeGuests = () => {
  const dataH = dataHotel;
  const { data, loading, err } = useFetch(
    "hotels?featured=true&city=ha+noi&city=ho+chi+minh",
  );

  return (
    <>
      {loading
        ? "loading"
        : data.length > 0 && (
            <div className={styles.box}>
              {data.map((hotel, id) => {
                return <HomeGuestItem key={id} item={hotel} />;
              })}
            </div>
          )}
    </>
  );
};

export default HomeGuests;
