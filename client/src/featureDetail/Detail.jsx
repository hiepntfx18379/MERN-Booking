import React, { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import Navbar from "../component/header/Navbar";
import Header from "../component/header/Header";
import Email from "../component/email/Email";
import Footer from "../component/footer/Footer";
import DetailItem from "./DetailItem";
import { useLocation } from "react-router-dom";
import useFetch from "../hookCustome/fetchData";
import { dataDetail } from "./data";

const Detail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, reFetch } = useFetch(`/hotels/find/${id}`);

  useEffect(() => {
    reFetch();
  }, [id]);

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
