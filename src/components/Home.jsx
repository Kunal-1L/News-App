import { useState } from "react";
import styles from "./Home.module.css";
import SearchBox from "./SearchBox";
const Home = () => {
  const [flag, setFlag] = useState(false);
  const handleClick = () => {
    console.log(flag);
    setFlag(true);
  };
  console.log(flag);
  return (
    <div>
      <div
        className={`${styles.home_container} ${flag ? styles.add_home : ""}`}
      >
        <div className={`${flag ? styles.add_tag : styles.tag_container}`}>
          <div className={styles.hero_tag}>
            Breaking News, Anytime, Anywhere
          </div>
          <div onClick={handleClick} className={styles.hero_btn}>
            <button>Explore Now</button>
          </div>
        </div>
      </div>
      {flag && <SearchBox search_cls={styles.search_cls} />}
    </div>
  );
};

export default Home;
