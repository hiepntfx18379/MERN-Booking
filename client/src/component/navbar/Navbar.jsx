import React from "react";
import styles from "./NavBar.module.css";
import { dataNavbar } from "./data";
import Item from "./Item";

const Navbar = () => {
  const dataItems = dataNavbar;
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.titlePage}>
          <div className={styles.logo}>Booking Website</div>
          <div className={styles.navButton}>
            <button className={styles.button}>Register</button>
            <button className={styles.button}>Log in</button>
          </div>
        </div>

        <div className={styles.navbarList}>
          {dataItems.map((it, id) => (
            <Item key={id} item={it} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
