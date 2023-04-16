import React from "react";
import { dataFooter } from "./data";
import styles from "./Footer.module.css";
import FototerItem from "./FooterItem";

const Footer = () => {
  const data = dataFooter;
  return (
    <div className={styles.FooterContainer}>
      {data.map((dt, id) => {
        return <FototerItem key={id} arrInfo={dt.col_values} />;
      })}
    </div>
  );
};

export default Footer;
