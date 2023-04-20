import Navbar from "../../component/header/Navbar";
import Header from "../../component/header/Header";
import styles from "../search/Search.module.css";
import BoxSearch from "../boxSearch/BoxSearch";
import DisplaySearch from "../display/DisplaySearch";

const Search = () => {
  return (
    <div>
      <Navbar />
      <Header type="search" />
      <BoxSearch />
    </div>
  );
};

export default Search;
