import React, { useContext, useEffect, useRef } from "react";
import styles from "./BoxSearch.module.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import DisplaySearch from "../display/DisplaySearch";
import styles2 from "../search/Search.module.css";
import useFetch from "../../hookCustome/fetchData";
import { SearchContext } from "../../context/searchContext";

const BoxSearch = () => {
  // dư liệu gửi từ ô tìm kiếm trang home
  const location = useLocation();

  // nhận và đặt trạng thái giá trị lấy đc
  const [destination, setDestination] = useState(location.state?.destination);
  const [date, setDate] = useState(location.state.date);
  const [option, setOptions] = useState(location.state?.options);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(999);
  const [rooms, setRooms] = useState(option?.room);
  const { data, loading, error, reFetch } = useFetch(
    `hotels/search?city=${destination}&min=${min}&max=${max}&rooms=${rooms}`,
  );

  return (
    <div className={styles2.boxContainer}>
      <div className={styles2.wrapper}>
        <div className={styles.infoSearch}>
          <h2 className={styles.titleSearch}>Search</h2>

          <div className={styles.item}>
            <label>Destination</label>
            <input
              className={styles.inputCheck}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              type="text"
            />
          </div>

          {/* chọn ngày */}
          <div className={styles.item}>
            <label>Check-in Date</label>
            <input
              style={{ padding: "5px", fontSize: "18px", fontweight: "600" }}
              readOnly
              value={`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy",
              )}`}
            />

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
              <input
                min={0}
                type="number"
                className={styles.textValue}
                value={min}
                onChange={(e) => setMin(e.target.value)}
              />
            </div>

            <div className={styles.opIt}>
              <span className={styles.text}>Max price per night</span>
              <input
                min={0}
                type="number"
                className={styles.textValue}
                value={max}
                onChange={(e) => setMax(e.target.value)}
              />
            </div>

            <div className={styles.opIt}>
              <span className={styles.text}>Adult</span>
              <input
                type="number"
                min={1}
                value={option.adult}
                className={styles.textValue}
              />
            </div>

            <div className={styles.opIt}>
              <span className={styles.text}>Children</span>
              <input
                type="number"
                min={0}
                value={option.children}
                className={styles.textValue}
              />
            </div>

            <div className={styles.opIt}>
              <span className={styles.text}> Room</span>
              <input
                min={1}
                type="number"
                className={styles.textValue}
                value={option.room}
                onChange={(e) => setRooms(e.target.value)}
              />
            </div>
          </div>
        </div>
        {loading ? "loading" : <DisplaySearch data={data} />}
      </div>
    </div>
  );
};

export default BoxSearch;
