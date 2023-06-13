import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";

import { transactionColumn } from "../../datatablesource";
import ListTransaction from "../list/ListTransaction";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [countUser, setCountUser] = useState(0);
  const [countRevenue, setCountRevenue] = useState(0);

  useEffect(() => {
    async function getAll() {
      try {
        const response = await axios.get("/user/all/transactions");
        setCountUser(response.data.length);
        let money = response.data.reduce((total, item) => {
          if (item.status === "Checkout") return total + Number(item.price);
          return total;
        }, 0);
        setCountRevenue(money);
      } catch (err) {
        console.log(err);
      }
    }

    getAll();
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" count={countUser} />
          <Widget type="order" count={countUser} />
          <Widget type="earning" count={countRevenue} />
          <Widget type="balance" count={countRevenue} />
        </div>
        <div className="charts"></div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <ListTransaction columns={transactionColumn} />
        </div>
      </div>
    </div>
  );
};

export default Home;
