// import styles from "./Brower.module.css";
import styles from "../boxContainer.module.css";
import { dataBrower } from "./data";
import BrowseItem from "./BrowseItem";
import useFetch from "../../../hookCustome/fetchData";

const Brower = () => {
  const dataB = dataBrower;
  const { data, loading, err } = useFetch("hotels/countByType");

  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div className={styles.box}>
          {data.length > 0 &&
            dataB.map((type, id) => (
              <BrowseItem key={id} id={id} image={type} data={data} />
            ))}
        </div>
      )}
    </>
  );
};

export default Brower;
