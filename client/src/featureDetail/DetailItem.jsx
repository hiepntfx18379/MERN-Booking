import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import styles from "./DetailItem.module.css";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import Popup from "./reserve/Popup";

const DetailItem = ({ in4, days, rooms, idHotel }) => {
  // in4: info hotel

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);

  const reserveClick = () => {
    if (user) {
      setOpenPopup(true);
    } else {
      navigate("/login");
    }
  };

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
      </div>

      {/* danh sách  hình ảnh */}
      <div className={styles.photosList}>
        {in4.photos?.map(
          (pt, i) =>
            pt && <img src={pt} alt="" key={i} className={styles.image} />,
        )}
      </div>

      {/* miêu tả  */}
      <div className={styles.infoDetail}>
        <div className={styles.textDetail}>
          <div className={styles.title}>{in4.title}</div>
          <div className={styles.desc}>{in4.description}</div>
        </div>

        <div className={styles.priceDetail}>
          <div className={styles.night}>
            Perfect for ${in4.cheapestPrice} 1-night stay!
          </div>
          <div className={styles.shortDesc}>
            Located in the real heart of Krakow,this property has an excellent
            location score of 9.8!
          </div>
          <div>
            <button className={styles.bookBtn} onClick={reserveClick}>
              Reserve or Book now
            </button>
          </div>
        </div>
      </div>
      {openPopup && (
        <Popup
          id={idHotel}
          close={setOpenPopup}
          info={in4}
          user={user}
          days={days}
          rooms={rooms}
        />
      )}
    </div>
  );
};

export default DetailItem;
