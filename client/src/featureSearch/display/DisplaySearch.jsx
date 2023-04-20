import React, { useState } from "react";
import DisplaySearchItem from "./DisplaySearchItem";
import styles from "./DisplaySearch.module.css";

import { dataSearch } from "./data";

const DisplaySearch = ({ data }) => {
  const dataS = dataSearch;
  return (
    <div className={styles.container}>
      {/* tao hieu ung position: sticky */}

      <div className={styles.box}>
        {data.length > 0 &&
          data.map((ht, id) => (
            <DisplaySearchItem key={id} dataS={dataS} hotel={ht} id={id} />
          ))}
      </div>
    </div>
  );
};

export default DisplaySearch;
