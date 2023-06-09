import React, { useContext, useEffect, useState } from "react";
import styles from "./Detail.module.css";
import Navbar from "../component/header/Navbar";
import Header from "../component/header/Header";
import Email from "../component/email/Email";
import Footer from "../component/footer/Footer";
import DetailItem from "./DetailItem";
import { useLocation } from "react-router-dom";
import useFetch from "../hookCustome/fetchData";
import { SearchContext } from "../context/searchContext";

const Detail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, reFetch } = useFetch(`/hotels/find/${id}`);
  // get date from context
  const { dates, options } = useContext(SearchContext);

  useEffect(() => {
    reFetch();
  }, [id]);

  // calculate days
  const millisecond_per_day = 1000 * 3600 * 24;
  const numberOfDays = (date1, date2) => {
    const timeMinus = Math.abs(date2?.getTime() - date1?.getTime());
    const theDays = Math.ceil(timeMinus / millisecond_per_day);
    return theDays ? theDays + 1 : 0;
  };

  const theDays = numberOfDays(dates[0]?.endDate, dates[0]?.startDate);
  const rooms = options.room; // so phong tim kiem

  return (
    <div className={styles.container}>
      <Navbar />
      <Header type="search" />
      <div className={styles.detailContainer}>
        <DetailItem in4={data} days={theDays} idHotel={id} rooms={rooms} />
      </div>
      <Email />
      <Footer />
    </div>
  );
};

export default Detail;
