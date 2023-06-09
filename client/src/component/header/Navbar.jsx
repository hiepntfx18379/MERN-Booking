import React, { useContext } from "react";
import styles from "./NavBar.module.css";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "logout" });
  };

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
          {user ? (
            <div className={styles.atferLogin}>
              <span className={styles.colortext}>{user.username}</span>
              <button>
                <Link to={`/transaction/${user._id}`}>Transaction</Link>
              </button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className={styles.navButton}>
              <button className={styles.button}>
                <Link to={"/register"}>Register</Link>
              </button>
              <button className={styles.button}>
                <Link to={"/login"}>Log in</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
