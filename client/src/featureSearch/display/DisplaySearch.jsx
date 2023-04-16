import React from "react";
import DisplaySearchItem from "./DisplaySearchItem";
import styles from "./DisplaySearch.module.css";
import { dataSearch } from "./data.js";

const DisplaySearch = () => {
  const data = dataSearch;
  return (
    <div className={styles.container}>
      {/* tao hieu ung position: sticky */}
      {data.map((ht, id) => (
        <DisplaySearchItem key={id} hotel={ht} />
      ))}
      {data.map((ht, id) => (
        <DisplaySearchItem key={id} hotel={ht} />
      ))}
    </div>
  );
};

export default DisplaySearch;
