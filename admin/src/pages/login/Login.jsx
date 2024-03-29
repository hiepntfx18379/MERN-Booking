import { useContext, useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

const Login = () => {
  const { loading, error, dispatch } = useContext(AuthContext);
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserLogin((Prev) => ({ ...Prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const res = await axios.post("auth/login", userLogin);
    console.log(res);
    if (res.data.isadmin) {
      dispatch({ type: "login_ss", payload: res.data.details });
      navigate("/");
    } else {
      dispatch({
        type: "logn_fail",
        payload: { message: "You are not allowed" },
      });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
