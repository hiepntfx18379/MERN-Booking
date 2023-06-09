import React from "react";
import Navbar from "../../component/header/Navbar";
import Header from "../../component/header/Header";
import Email from "../../component/email/Email";
import Footer from "../../component/footer/Footer";
import styles from "./transaction.module.css";
import TableTransaction from "./TableTransaction";
import { useLocation } from "react-router-dom";

const Transactions = () => {
  const location = useLocation();
  const idUser = location.state;

  return (
    <div>
      <Navbar />
      <Header type="search" />
      <div className={styles.detailContainer}>
        <h4>Your Transaction</h4>
        <TableTransaction id={idUser} />
      </div>
      <Email />
      <Footer />
    </div>
  );
};

export default Transactions;
