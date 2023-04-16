import React from "react";
import styles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.titlePage}>
          <div
            className={styles.logo}
            style={{ cursor: "pointer" }}
            onClick={() => window.location.replace("http://localhost:3000/")}
          >
            Booking Website
          </div>
          <div className={styles.navButton}>
            <button className={styles.button}>Register</button>
            <button className={styles.button}>Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
