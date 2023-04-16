import React from "react";
import styles from "./Email.module.css";

const Email = () => {
  return (
    <div className={styles.emailContainer}>
      <div className={styles.email}>
        <h2>Save time, save money!</h2>
        <p className={styles.emailDesc}>
          Sign up and we'll send the best deals to you
        </p>
        <div className={styles.submitEmail}>
          <input
            type="text"
            className={styles.inputEamil}
            placeholder="Your Email"
          />
          <button type="submit" className={styles.btnSmEmail}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Email;
