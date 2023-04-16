import Navbar from "../header/Navbar";
import Header from "../header/Header";
import Cities from "../content/city/Cities";
import styles from "./Home.module.css";
import Brower from "../content/brower/Brower";
import HomeGuests from "../content/homeguest/HomeGuests";
import Email from "../email/Email";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className={styles.homeContainer}>
        <Cities />

        <h3>Browse by property type</h3>

        <Brower />
        <h3>Home guests love</h3>
        <HomeGuests />
      </div>
      <Email />
      <Footer />
    </div>
  );
};

export default Home;
