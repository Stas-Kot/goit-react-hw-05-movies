import Searchbar from 'components/Searchbar/Searchbar';
import * as API from '../services/api';
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const movieName = new URLSearchParams(location.search).get('query');
    if (movieName === null) {
      return;
    }
    API.fetchQueryMovies(movieName).then(setMovies);
  }, [location.search]);

  const onSubmit = query => {
    setSearchQuery(query);
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    API.fetchQueryMovies(searchQuery).then(setMovies);
  }, [searchQuery]);

  return (
    <>
      <Searchbar handleSubmit={onSubmit} />
      <MoviesList movies={movies} />
    </>
  );
}
