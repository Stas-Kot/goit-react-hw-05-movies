import * as API from '../../services/api';
import {
  useParams,
  Route,
  useLocation,
  useHistory,
  useRouteMatch,
  NavLink,
} from 'react-router-dom';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import s from './MovieInfo.module.css';
import Spinner from '../../components/Loader/Loader.jsx';
// import Cast from '../Cast/Cast.jsx';
// import Reviews from '../MovieReviews/Reviews.jsx';
import noPoster from '../../images/no-poster-available.jpg';

const Cast = lazy(() =>
  import('../Cast/Cast.jsx' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('../MovieReviews/Reviews.jsx' /* webpackChunkName: "reviews" */),
);

export default function MovieInfo() {
  const imgBasePath = 'https://image.tmdb.org/t/p/w500';
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    API.fetchMovieInfo(movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      {movie && (
        <>
          <button className={s.goBackBtn} type="button" onClick={onGoBack}>
            Go back
          </button>
          <article className={s.movieInfo}>
            <img
              src={
                movie.poster_path ? imgBasePath + movie.poster_path : noPoster
              }
              alt={movie.tagline}
            />
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
              <NavLink
                to={{
                  pathname: `${url}/cast`,
                  state: { from: location?.state?.from ?? '/' },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: location?.state?.from ?? '/' },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<Spinner />}>
            <Route path={`${path}/cast`}>
              <Cast />
            </Route>

            <Route path={`${path}/reviews`}>
              <Reviews />
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
}
