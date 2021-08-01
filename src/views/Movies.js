import Searchbar from 'components/Searchbar/Searchbar';
import * as API from '../services/api';
import React, { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const onSubmit = query => {
    setSearchQuery(query);
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
