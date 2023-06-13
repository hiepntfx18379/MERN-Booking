import "./newHotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { hotelInputs } from "../../formSource";
import useFetch from "../../hookCustome/fetchData";

const UpdateHotel = ({ title }) => {
  const param = useParams();
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const navigate = useNavigate();
  const { data } = useFetch("/rooms");
  const [rooms, setRooms] = useState([]);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value,
    );
    setRooms(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const list = await Promise.all(
        Object.values(file).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dmwl0pu3j/image/upload",
            data,
          );

          const { url } = uploadRes.data;
          return url;
        }),
      );

      const updateHotel = {
        ...info,
        rooms,
        photos: list,
      };
      await axios.put(`/hotels/update/${param.id}`, updateHotel);

      navigate("/hotels");
    } catch (err) {
      alert("Fields not empty");
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>

          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFile(e.target.files)}
                  style={{ display: "none" }}
                  required
                />
              </div>

              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    name={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    required
                  />
                </div>
              ))}

              <div className="formInput">
                <label>Feature</label>
                <select id="featured" name="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>

              <div className="selectRooms">
                <label>Rooms</label>
                <select id="rooms" multiple required onChange={handleSelect}>
                  {data.map((room) => (
                    <option key={room._id} value={room._id}>
                      {room.title}
                    </option>
                  ))}
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateHotel;
