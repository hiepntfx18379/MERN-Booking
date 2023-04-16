// import styles from "./Brower.module.css";
import styles from "../boxContainer.module.css";
import { dataBrower } from "./data";
import React from "react";
import BrowseItem from "./BrowseItem";

const Brower = () => {
  const data = dataBrower;
  return (
    <div className={styles.box}>
      {data.map((type, id) => (
        <BrowseItem key={id} type={type} />
      ))}
    </div>
  );
};

export default Brower;
