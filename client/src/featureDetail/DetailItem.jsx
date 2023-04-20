import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./DetailItem.module.css";

const DetailItem = ({ in4 }) => {
  const location = useLocation();
  return (
    <div className={styles.box}>
      {/* thong tin hotel */}
      <div className={styles.reserve_book}>
        <div className={styles.addressDetail}>
          <div className={styles.name}>{in4.name}</div>
          <div className={styles.address}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
            {in4.address}
          </div>
          <div className={styles.distance}>
            Excellent location - {in4.distance}m from center
          </div>
          <div className={styles.price}>
            Book a stay over ${in4.cheapestPrice} at this property and get a
            free airport taxi
          </div>
        </div>

        <button className={styles.bookBtn1}>Reserve or Book now</button>
      </div>

      {/* danh sách  hình ảnh */}
      <div className={styles.photosList}>
        {in4.photos?.map((pt, i) => (
          <img src={pt} alt="" key={i} className={styles.image} />
        ))}
      </div>

      {/* miêu tả  */}
      <div className={styles.infoDetail}>
        <div className={styles.textDetail}>
          <div className={styles.title}>{in4.title}</div>
          <div className={styles.desc}>{in4.desc}</div>
        </div>

        <div className={styles.priceDetail}>
          <div className={styles.night}>Perfect for a 9-night stay!</div>
          <div className={styles.shortDesc}>
            Located in the real heart of Krakow,this property has an excellent
            locatin score of 9.8!
          </div>
          <div className={styles.title}>
            ${in4.cheapestPrice * 9}
            <span className={styles.currentPrice}> (9 nights)</span>
          </div>
          <div>
            <button className={styles.bookBtn}>Reserve or Book now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailItem;
