import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import styles from "./login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });
  const { user, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setUserLogin((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("auth/login", userLogin);
      dispatch({ type: "login_ss", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "logn_fail", payload: err.response.data });
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <label for="uname">
          <b>Username</b>
        </label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter Username"
          name="username"
          id="username"
          required
        />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id="password"
          onChange={handleChange}
          required
        />

        <button className={styles.btnLogin} onClick={handleClick}>
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </>
  );
};

export default Login;
