import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./News.module.css";
import styles1 from "./Home.module.css";
import SearchBox from "./SearchBox";
const News = () => {
  const location = useLocation();
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const fetchData = async () => {
      const input_city = params.get("input_city");
      const input_from_date = params.get("input_from_date");
      const input_to_date = params.get("input_to_date");
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8000/fetchData", {
          params: { input_city, input_from_date, input_to_date },
        });
        setNewsData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location]);

  return !loading ? (
    newsData.length > 0 ? (
        <div className={styles.newsList}>
          {newsData.map((newsItem, index) => (
            <div className={styles.newsItem}>
              <a
                href={newsItem.url}
                target="_blank"
                key={index}
              >
                <div className={styles.newsTitle}>
                  {newsItem.title}
                </div>
                <div className={styles.newsImage}>
                  <img src={newsItem.image} alt="No image found" />
                </div>
                <div className={styles.newsDesc}>
                  <p>{newsItem.description}</p>
                </div>
                <div className={styles.newsSource}>
                  {newsItem.source}
                </div>
              </a>
            </div>
          ))}
        </div>
    ) : (
      <div className={styles1.home_container}>
        <SearchBox search_cls={styles1.search_cls} />
      </div>
    )
  ) : (
    <div class="d-flex justify-content-center" style={{minHeight:'100vh'}}>
      <div class="spinner-border" role="status" style={{marginTop:'20%', marginBottom:'20%'}}>
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default News;
