import PageHeading from 'components/PageHeading/PageHeading';
import MoviesList from 'components/MoviesList/MoviesList';
import * as API from '../services/api';
import React, { useState, useEffect } from 'react';

export default function HomeView() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    API.fetchPopularMovies().then(setMovies);
  }, []);
  return (
    <>
      <PageHeading title="Trending today" />
      <MoviesList movies={movies} />
    </>
  );
}
