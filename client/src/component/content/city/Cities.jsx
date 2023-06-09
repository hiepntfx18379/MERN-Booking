import React from "react";
import CityItem from "./CityItem";
import { dataCity } from "./data";
import styles from "../boxContainer.module.css";
import useFetch from "../../../hookCustome/fetchData";

const Cities = () => {
  const dataC = dataCity;
  const { data, loading } = useFetch(
    "hotels/countByCity?cities=Ha+Noi,Ho+Chi+Minh,Da+Nang",
  );
  return (
    <>
      {loading
        ? "Loading"
        : data.length > 0 && (
            <div className={styles.box}>
              {dataC.map((ct, id) => {
                return <CityItem key={id} id={id} data={data} city={ct} />;
              })}
            </div>
          )}
    </>
  );
};

export default Cities;
