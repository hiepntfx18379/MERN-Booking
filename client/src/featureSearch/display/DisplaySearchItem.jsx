import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DisplaySearchItem.module.css";

const DisplaySearchItem = ({ hotel }) => {
  // xử lý sự kiện xem chi tiết
  let nameHotel = hotel.name;
  let disHotel = hotel.distance;
  let priceHotel = hotel.price;
  let descHotel = hotel.description;

  const navigate = useNavigate();
  const handleGetDetail = () => {
    navigate("/detail", {
      state: { nameHotel, disHotel, priceHotel, descHotel },
    });
  };

  return (
    <div className={styles.boxDisplay}>
      <img src={hotel.image_url} alt="" className={styles.image} />

      {/* thong tin hotel */}
      <div className={styles.mainContent}>
        <div className={styles.infoHotel}>
          <div className={styles.name}>{hotel.name}</div>
          <div className={styles.distance}>{hotel.distance} from center</div>
          <div className={styles.tag}>{hotel.tag}</div>
          <div className={styles.description}>{hotel.description}</div>
          <div className={styles.type}>{hotel.type}</div>
          <div className={styles.free_cancel}>
            {hotel.free_cancel && (
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
            <span className={styles.rate_text}>{hotel.rate_text}</span>
            <span className={styles.rate}>{hotel.rate}</span>
          </div>
          <div className={styles.price_tax}>
            <div className={styles.price}>${hotel.price}</div>
            <div className={styles.tax}>Includes taxes and fees</div>
            <button className={styles.bookBtn} onClick={handleGetDetail}>
              See availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplaySearchItem;
