import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/component/home/Home";
import Detail from "./featureDetail/Detail";
import Search from "../src/featureSearch/search/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
