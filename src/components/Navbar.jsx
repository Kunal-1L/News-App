import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navLink}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.activeNavLink}` : ""
          }
        >
          Home
        </NavLink>
      </div>
      <div className={styles.navLink}>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive ? `${styles.activeNavLink}` : ""
          }
        >
          News
        </NavLink>
      </div>
      <div className={styles.navLink}>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${styles.activeNavLink}` : ""
          }
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
