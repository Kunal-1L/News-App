import styles from "./SearchBox.module.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = ({ search_cls }) => {
  const navigate = useNavigate();
  const input_city_ref = useRef(null);
  const input_to_date_ref = useRef(null);
  const input_from_date_ref = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const city = input_city_ref.current.value;
    const from_date = input_from_date_ref.current.value;
    const to_date = input_to_date_ref.current.value;

    const queryParams = new URLSearchParams({
      input_city: city,
      input_from_date: from_date,
      input_to_date: to_date,
    }).toString();

    navigate(`/news?${queryParams}`);
  };

  return (
    <form
      className={search_cls}
      onSubmit={handleSubmit}
    >
      <div className={styles.search_container}>
        <div className={styles.search_tag}>
          What’s Trending? Search Here
        </div>

        <div className={styles.searchCity}>
          <input
            type="text"
            name="input_city"
            placeholder="Enter City or County name"
            ref={input_city_ref}
          />
        </div>
        <div className={styles.searchDate}>
          <div style={{backgroundColor:'white', borderRadius:'0.3rem', paddingLeft:'0.6rem'}}>
            <label htmlFor="input_from_date" >From: </label>
            <input
              type="date"
              name="input_from_date"
              ref={input_from_date_ref}
            />
          </div>
          <div style={{backgroundColor:'white',borderRadius:'0.3rem',paddingLeft:'0.6rem'}}>
            <label htmlFor="input_to_date" >To: </label>
            <input type="date" name="input_to_date" ref={input_to_date_ref} />
          </div>
        </div>
        <div className={styles.searchBtn}>
          <button type="submit">Explore</button>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
