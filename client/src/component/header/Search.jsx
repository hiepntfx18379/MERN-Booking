import React from "react";
import { useState } from "react";
import { DateRange } from "react-date-range";
import styles from "./Search.module.css";
import "react-date-range/dist/styles.css"; // main css
import "react-date-range/dist/theme/default.css"; // them css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Search = () => {
  // ẩn hiện ô thời gian
  const [openDate, setOpenDate] = useState(false);

  // chọn ngày đi - về
  const [date, setDate] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);

  // tim vị trí hotel
  const [destination, setDestination] = useState("");

  // sl người
  const [openOptions, setOpenOptions] = useState(false); // click toggle

  // default
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // useState increase - decrease user
  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    }));
  };

  // handle search => pass info to page search
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/search", {
      state: { destination, date, options },
    });
  };

  return (
    <div className={styles.headerSearch}>
      {/* địa điểm */}
      <div className={styles.headerSearchItem}>
        <span>
          <i className={`fa fa-bed ${styles.headerIcon}`}></i>
        </span>
        <input
          type="text"
          placeholder="Where are you going?"
          className={styles.headerSearchInput}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      {/* lịch */}
      <div className={styles.headerSearchItem}>
        <span>
          <i className={`fa fa-calendar ${styles.headerIcon}`}></i>
        </span>
        <span
          className={styles.headerSearchText}
          onClick={() => setOpenDate(!openDate)}
        >
          {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}

          {/* đóng mở lịch */}
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className={styles.date}
            />
          )}
        </span>
      </div>

      {/* người  */}
      <div className={styles.headerSearchItem}>
        <span>
          <i className={`fa a-female ${styles.headerIcon}`}></i>
        </span>

        <span
          className={styles.headerSearchText}
          onClick={() => {
            setOpenOptions(!openOptions);
          }}
        >
          {`${options.adult} adult * ${options.children} children * ${options.room}  room `}
        </span>

        {/* đóng mở chọn sl người */}
        {openOptions && (
          <div className={styles.options}>
            <div className={styles.optionItem}>
              <span
                className={styles.optionText}
                style={{ marginRight: "3px" }}
              >
                Adult
              </span>
              <button
                disabled={options.adult <= 1}
                className={styles.optionCouterButton}
                onClick={() => handleOption("adult", "d")}
              >
                -
              </button>
              <span className={styles.optionCounterNumber}>
                {options.adult}
              </span>
              <button
                className={styles.optionCouterButton}
                onClick={() => handleOption("adult", "i")}
              >
                +
              </button>
            </div>

            <div className={styles.optionItem}>
              <span
                className={styles.optionText}
                style={{ marginRight: "-20px" }}
              >
                Children
              </span>
              <button
                disabled={options.children <= 0}
                className={styles.optionCouterButton}
                onClick={() => handleOption("children", "d")}
              >
                -
              </button>
              <span className={styles.optionCounterNumber}>
                {options.children}
              </span>
              <button
                className={styles.optionCouterButton}
                onClick={() => handleOption("children", "i")}
              >
                +
              </button>
            </div>

            <div className={styles.optionItem}>
              <span className={styles.optionText}>Room</span>
              <button
                disabled={options.room <= 1}
                className={styles.optionCouterButton}
                onClick={() => handleOption("room", "d")}
              >
                -
              </button>
              <span className={styles.optionCounterNumber}>{options.room}</span>
              <button
                className={styles.optionCouterButton}
                onClick={() => handleOption("room", "i")}
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>

      {/* xử lý submit */}
      <div className={styles.headerSearchItem}>
        <button
          type="submit"
          onClick={handleSearch}
          className={styles.headerBtn}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
