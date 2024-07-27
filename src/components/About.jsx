import styles from "./About.module.css";
import styles1 from "./Home.module.css"
const About = () => {
  return (
    <div className={styles1.home_container}>
      <div className={styles.about_head}>NEWS Application </div>
      <div className={styles.about_desc}>
        This application is developed by{" "}
        <strong>Kunal Kumar, Graphic Era University </strong>
        It basically allow users to search for News of city or country. It also
        allow user to specify time period in between which he wants to see News
        This application use React.js for its frontend and Express.js(Node.js)
        for backend Basically after taking input from user a request is send to
        backend where News are fetched from API.
      </div>
    </div>
  );
};

export default About;
