import { Link, useRouteMatch } from 'react-router-dom';
import styles from './MoviesListItem.module.css';

export default function MoviesListItem({ title, id }) {
  const { url } = useRouteMatch();

  return (
    <li>
      <Link className={styles.movieItem} to={`/movies/${id}`}>
        {title}
      </Link>
    </li>
  );
}
