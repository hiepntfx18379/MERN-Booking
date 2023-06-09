import React, { useEffect, useState, useSyncExternalStore } from "react";
import DisplaySearchItem from "./DisplaySearchItem";
import styles from "./DisplaySearch.module.css";
import axios from "axios";

import { dataSearch } from "./data";
import Navbar from "../../component/header/Navbar";
import Email from "../../component/email/Email";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";

const AllHotel = () => {
  const [data, setGetHotels] = useState([]);

  useEffect(() => {
    async function getAllHotels() {
      try {
        const hotels = await axios.get("/hotels/getAll");
        setGetHotels(hotels.data);
      } catch (err) {
        console.log(err);
      }
    }

    getAllHotels();
  }, []);

  const dataS = dataSearch;
  return (
    <>
      <Navbar />
      <Header />

      <div className={styles.container} style={{ marginTop: "30px" }}>
        {/* tao hieu ung position: sticky */}

        <div className={styles.box}>
          {data.length > 0 &&
            data.map((ht, id) => (
              <DisplaySearchItem key={id} dataS={dataS} hotel={ht} id={id} />
            ))}
        </div>
      </div>

      <Email />
      <Footer />
    </>
  );
};

export default AllHotel;
