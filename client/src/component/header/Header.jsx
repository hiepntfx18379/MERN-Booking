import React from "react";
import styles from "./Header.module.css";
import Item from "./Item";
import Search from "./Search";
import clsx from "clsx";
import { dataNavbar } from "./data";

const Header = ({ type }) => {
  const dataItems = dataNavbar;
  return (
    <div className={styles.header}>
      <div className={clsx(styles.headerContainer)}>
        <div className={styles.headerList}>
          {dataItems.map((it, id) => (
            <Item key={id} item={it} />
          ))}
        </div>

        {type !== "search" && (
          <>
            <div className={styles.textHeader}>
              <h1 className={styles.headerTitle}>
                A lifetime of discount? It's Genius
              </h1>
              <p className={styles.headerDesc}>
                Get rewarded for your travels - unlock instant savings 10% or
                more with free discount
              </p>
              <button className={styles.headerBtn}>Sign in / Register </button>
            </div>

            <Search />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
