import React from "react";
import styles from "./BoxSearch.module.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const BoxSearch = () => {
  // dư liệu gửi từ ô tìm kiếm trang home
  const location = useLocation();
  // console.log(location); in ra dữ liệu

  // nhận và đặt trạng thái giá trị lấy đc
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div className={styles.infoSearch}>
      <h2 className={styles.titleSearch}>Search</h2>

      <div className={styles.item}>
        <label>Destination</label>
        <input
          className={styles.inputCheck}
          type="text"
          value={destination}
          onChange={(e) => e.target.value}
        />
      </div>

      {/* chọn ngày */}
      <div className={styles.item}>
        <label>Check-in Date</label>
        <span
          onClick={() => setOpenDate(!openDate)}
          className={styles.checkDate}
        >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
          date[0].endDate,
          "MM/dd/yyyy"
        )}`}</span>

        {/* Đóng mở lịch */}
        {openDate && (
          <DateRange
            onChange={(item) => setDate([item.selection])}
            minDate={new Date()}
            ranges={date}
          />
        )}
      </div>

      {/* số lượng người */}
      <div className={styles.item}>
        <label>Options</label>
        <div className={styles.opIt}>
          <span className={styles.text}>Min price per night</span>
          <input min={0} type="number" className={styles.textValue} />
        </div>

        <div className={styles.opIt}>
          <span className={styles.text}>Max price per night</span>
          <input min={0} type="number" className={styles.textValue} />
        </div>

        <div className={styles.opIt}>
          <span className={styles.text}>Adult</span>
          <input type="number" min={1} className={styles.textValue} />
        </div>

        <div className={styles.opIt}>
          <span className={styles.text}>Children</span>
          <input type="number" min={0} className={styles.textValue} />
        </div>

        <div className={styles.opIt}>
          <span className={styles.text}>Room</span>
          <input type="number" min={1} className={styles.textValue} />
        </div>
      </div>

      <button className={styles.btnSearch}>Search</button>
    </div>
  );
};

export default BoxSearch;
