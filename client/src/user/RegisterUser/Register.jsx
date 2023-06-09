import React, { useState } from "react";
import styles from "./register.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userRegister, setUserRegister] = useState({
    username: "",
    password: "",
    fullname: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserRegister((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("auth/register", userRegister);
      navigate("/");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <label for="username">
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

        <label for="fullname">
          <b>Full Name</b>
        </label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter Fullname"
          name="fullname"
          id="fullname"
          required
        />

        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter Eamil"
          name="email"
          id="email"
          required
        />

        <label for="phone">
          <b>Phone</b>
        </label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter Phone number"
          name="phonenumber"
          id="phonenumber"
          required
        />

        <label for="password">
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

        <button className={styles.btnRegister} onClick={handleClick}>
          Register
        </button>
      </div>
    </>
  );
};

export default Register;
