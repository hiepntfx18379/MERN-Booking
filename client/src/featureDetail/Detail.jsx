import React from "react";
import styles from "./Detail.module.css";
import Navbar from "../component/header/Navbar";
import Header from "../component/header/Header";
import Email from "../component/email/Email";
import Footer from "../component/footer/Footer";
import DetailItem from "./DetailItem";
import { dataDetail } from "./data";

const Detail = () => {
  const data = dataDetail;
  return (
    <div className={styles.container}>
      <Navbar />
      <Header type="search" />
      <div className={styles.detailContainer}>
        <DetailItem in4={data} />
      </div>
      <Email />
      <Footer />
    </div>
  );
};

export default Detail;
