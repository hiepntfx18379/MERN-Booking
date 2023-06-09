import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./DisplaySearchItem.module.css";

const DisplaySearchItem = ({ hotel, dataS, id }) => {
  // xử lý sự kiện xem chi tiết
  let nameHotel = hotel.name;
  let disHotel = hotel.distance;
  let priceHotel = hotel.price;
  let descHotel = hotel.description;

  const navigate = useNavigate();

  return (
    <div className={styles.boxDisplay}>
      <img src={hotel.photos[0]} alt="" className={styles.image} />

      {/* thong tin hotel */}
      <div className={styles.mainContent}>
        <div className={styles.infoHotel}>
          <div className={styles.name}>{hotel.name}</div>
          <div className={styles.distance}>{hotel.distance}m from center</div>
          <div className={styles.tag}>{dataS[id]?.tag}</div>
          <div className={styles.description}>{hotel.desc}</div>
          <div className={styles.type}>
            <b>room of {hotel?.type}: </b> <br />
            {dataS[id]?.type}
          </div>
          <div className={styles?.free_cancel}>
            {dataS[id]?.free_cancel && (
              <div>
                <div className={styles.cancelText}>Free cancellation</div>
                <div className={styles.cancelDesc}>
                  You can cancel later , so lock in this great price today!
                </div>
              </div>
            )}
          </div>
        </div>

        {/* đánh giá và nút đặt phòng */}
        <div className={styles.deal}>
          <div className={styles.quality}>
            <span className={styles.rate_text}>{dataS[id]?.rate_text}</span>
            <span className={styles.rate}>{dataS[id]?.rate}</span>
          </div>
          <div className={styles.price_tax}>
            <div className={styles.price}>${hotel.cheapestPrice}</div>
            <div className={styles.tax}>Includes taxes and fees</div>
            <Link to={`/hotels/${hotel._id}`}>
              <button className={styles.bookBtn}>See availability</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplaySearchItem;
