import React, { useEffect, useState } from "react";
import moment from "moment";
import styles from "./transaction.module.css";
import { useParams } from "react-router-dom";

const TableTransaction = () => {
  const [getTrans, setGetTrans] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const getAllTransactionOfUser = async () => {
      const res = await fetch(`http://localhost:5000/user/transaction/${id}`);
      const data = await res.json();
      setGetTrans(data.userTransaction);
    };

    getAllTransactionOfUser();
  }, [id]);

  console.log(getTrans);

  return (
    <div>
      <table id={styles.customers}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Hotel</th>
            <th scope="col">Room</th>
            <th scope="col">Date</th>
            <th scope="col">Price</th>
            <th scope="col">Payment Method</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {getTrans.map((t, id) => (
            <tr style={{ textAlign: "center" }}>
              <th scope="row">{id + 1}</th>
              <td>{t.hotelname}</td>
              <td>{t.room.join()}</td>
              <td>
                {moment.utc(t.dateStart).format("DD/MM/YY")} -{" "}
                {moment.utc(t.dateEnd).format("DD/MM/YY")}
              </td>
              <td>${t.price}</td>
              <td>{t.payment}</td>
              <td>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTransaction;
