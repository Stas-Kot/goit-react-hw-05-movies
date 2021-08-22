import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = title => (
  <nav>
    <NavLink
      to="/"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>
    <NavLink
      to="/movies"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Movies
    </NavLink>
    <hr className={styles.line}></hr>
  </nav>
);

export default Navigation;
