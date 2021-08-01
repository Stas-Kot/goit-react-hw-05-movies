import * as API from '../../services/api';
import {
  useParams,
  Route,
  Switch,
  useRouteMatch,
  NavLink,
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styles from './MovieInfo.module.css';
import Cast from '../Cast/Cast';

export default function MovieInfo() {
  const imgBasePath = 'https://image.tmdb.org/t/p/w500';
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    API.fetchMovieInfo(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <article className={styles.movieInfo}>
            <img src={imgBasePath + movie.poster_path} alt={movie.tagline} />
            <ul>
              <li>
                <h2>
                  {movie.title} ({Number.parseInt(movie.release_date)})
                </h2>
              </li>

              <li>
                <p>User Score: {movie.vote_average * 10}% </p>
              </li>
              <li>
                <h3>Overview</h3> <p>{movie.overview}</p>
              </li>
              <li>
                <h4>Genres</h4>
                <p>
                  {movie.genres &&
                    movie.genres.map(({ name }) => name).join(' ')}
                </p>
              </li>
            </ul>
          </article>

          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>Reviews</li>
          </ul>
          <Route path="/movies/:movieId/cast">
            <Cast />
          </Route>
        </>
      )}
    </>
  );
}
