import React, { setS } from "react";
import styles from "./Item.module.css";
import clsx from "clsx";
import { useState } from "react";

// phần tử render icon có props truyền từ Header.jsx
const Item = ({ item }) => {
  // toggle hover active class
  const [acCl, setAcCl] = useState(item.active);
  const handleActiveToggle = () => setAcCl(true);
  const handleDeactive = () => {
    setAcCl(false);
  };

  return (
    <div
      onMouseEnter={handleActiveToggle}
      onMouseLeave={handleDeactive}
      className={clsx(styles.boxItem, {
        [styles.active]: acCl,
      })}
    >
      <span>
        <i className={`fa ${item.icon}`} aria-hidden="true"></i>
      </span>
      <span className="type">{item.type}</span>
    </div>
  );
};

export default Item;
