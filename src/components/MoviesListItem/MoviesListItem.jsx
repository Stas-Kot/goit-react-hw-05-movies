import { Link, useLocation } from 'react-router-dom';
import styles from './MoviesListItem.module.css';

export default function MoviesListItem({ title, id }) {
  const location = useLocation();

  return (
    <li>
      <Link
        className={styles.movieItem}
        to={{
          pathname: `/movies/${id}`,
          state: { from: location },
        }}
      >
        {title}
      </Link>
    </li>
  );
}
