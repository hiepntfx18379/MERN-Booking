import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import useFetch from "../../hookCustome/fetchData";
import styles from "./popup.module.css";
import { SearchContext } from "../../context/searchContext";
import axios from "axios";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Popup = ({ id, close, user, days, info }) => {
  const { data } = useFetch(`allRoom/${id}`);
  const { dates } = useContext(SearchContext);
  const [payMethod, setPayMethod] = useState("");
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [bill, setBill] = useState(0);
  const [countDay, setCountDay] = useState(days);
  const navigate = useNavigate();

  // chọn ngày đi - về
  const [date, setDate] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);

  useEffect(() => {
    if (dates.length !== 0) setDate(dates);
    else
      setDate([
        { startDate: new Date(), endDate: new Date(), key: "selection" },
      ]);
  }, []);

  // calculate days
  const millisecond_per_day = 1000 * 3600 * 24;
  const numberOfDays = (date1, date2) => {
    const timeMinus = Math.abs(date2?.getTime() - date1?.getTime());
    const theDays = Math.ceil(timeMinus / millisecond_per_day);
    return theDays ? theDays + 1 : 0;
  };

  useEffect(() => {
    setCountDay(numberOfDays(date[0].endDate, date[0].startDate));
  }, [date]);

  useEffect(() => {
    setBill(
      selectedRooms.reduce(function (acc, obj) {
        return acc + Number(obj.price) * countDay;
      }, 0),
    );
  }, [selectedRooms, countDay]);

  // close pop-up
  const handleClose = () => {
    close(false);
  };

  const handleSelect = (e, idRoom, price, numberRoom) => {
    const checked = e.target.checked;
    const roomChoice = { idRoom, price, numberRoom };
    setSelectedRooms(
      checked
        ? [...selectedRooms, roomChoice]
        : selectedRooms.filter((item) => item.idRoom !== idRoom),
    );
  };

  //when room was chose => from start-date to end-date can't choose
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime()); // time started using
    const dates = []; // array contain day room was used
    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    // return array of date for using
    return dates;
  };

  // cal date using
  const allDates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate);

  // check rooms
  const isAvailable = (roomNumber) => {
    const canChoose = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime()),
    );

    return !canChoose;
  };

  const addDaysToDate = (date, n) => {
    const d = new Date(date);
    d.setDate(d.getDate() + n);
    return d.toISOString().split("T")[0];
  };

  const newTransaction = {
    user: user._id,
    username: user.username,
    hotel: id,
    hotelname: info.name,
    roomInfo: selectedRooms.map((m) => m.idRoom),
    room: selectedRooms.map((m) => m.numberRoom),
    dateStart: addDaysToDate(date[0].startDate, 1),
    dateEnd: addDaysToDate(date[0].endDate, 1),
    price: bill,
    payment: payMethod,
  };
  console.log(newTransaction);

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availableRoom/${roomId.value}`, {
            dates: allDates,
          });
          return res.data;
        }),
        await axios.post(`/user/transaction`, newTransaction),
      );

      navigate(`/transaction/${user._id}`, { state: user._id });
    } catch (err) {
      alert("Miss number of rooms or payment method");
    }
  };

  return (
    <div className={styles.reserve}>
      <div className={styles.rContainer}>
        <div className={styles.infoReserve}>
          <div className={styles.headerSearchItem}>
            <span style={{ fontSize: "18px", fontWeight: "600" }}>Date</span>
            <br />
            {/* đóng mở lịch */}
            {true && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className={styles.date}
              />
            )}
          </div>

          <div className={styles.userReserve}>
            <span style={{ fontSize: "18px", fontWeight: "600" }}>
              Reserve Info
            </span>
            <button
              onClick={handleClose}
              style={{
                position: "absolute",
                marginRight: "0px",
                padding: "0px",
                right: 0,
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              X
            </button>
            <br />
            {user && (
              <div>
                <div class="mb-3 mt-3">
                  <label>Your Full Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="fulname"
                    value={user.fullname}
                    placeholder="Full name"
                    name="fullname"
                  />
                </div>
                <div class="mb-3">
                  <label>Your email:</label>
                  <input
                    type="text"
                    value={user.email}
                    class="form-control"
                    id="mail"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div class="mb-3">
                  <label>Your Phone Number:</label>
                  <input
                    type="text"
                    class="form-control"
                    value={user.phonenumber}
                    id="phone"
                    placeholder="Phone Number"
                    name="phone"
                  />
                </div>
                {payMethod === "credit" ? (
                  <div class="mb-3">
                    <label>Your Identity Card:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="card"
                      placeholder="Card Number"
                      name="card"
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>

        <span style={{ fontSize: "18px", fontWeight: "600" }}>
          Select your rooms:
        </span>
        <div className={styles.displayRooms}>
          {data.map((item) =>
            item ? (
              <div>
                <div className={styles.rItem} key={item._id}>
                  <div className={styles.rItemInfo}>
                    <div className={styles.rTitle}>{item.title}</div>
                    <div className={styles.rMax}>
                      Max people: <b>{item.maxPeople}</b>
                    </div>
                    <div className={styles.rPrice}>${item.price}</div>
                  </div>
                  <div className={styles.rSelectRooms}>
                    {item.roomNumbers.map((roomNumber) => (
                      <div className={styles.room}>
                        <label>{roomNumber.number}</label>
                        <input
                          type="checkbox"
                          value={roomNumber._id}
                          onChange={(e) =>
                            handleSelect(
                              e,
                              item._id,
                              item.price,
                              roomNumber.number,
                            )
                          }
                          disabled={!isAvailable(roomNumber)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              true
            ),
          )}
        </div>

        <span
          style={{
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          Total bill: ${bill}
        </span>

        <div style={{ display: " flex", gap: "15px" }}>
          <select
            onChange={(e) => setPayMethod(e.target.value)}
            style={{ textAlign: "center", height: "40px", marginTop: "20px" }}
          >
            <option> Select Payment method</option>
            <option value="credit">Credit Card</option>
            <option value="cash">Cash</option>
          </select>
          <button onClick={handleClick} className={styles.rButton}>
            Reserve Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
