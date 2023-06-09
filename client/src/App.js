import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/component/home/Home";
import Detail from "./featureDetail/Detail";
import Search from "../src/featureSearch/search/Search";
import Login from "./user/loginUser/Login.jsx";
import Register from "./user/RegisterUser/Register.jsx";
import Transactions from "./featureDetail/transactions/Transactions";
import AllHotel from "./featureSearch/display/AllHotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/all" element={<AllHotel />} />
        <Route path="/hotels/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/transaction/:id" element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
