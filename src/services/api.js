import axios from 'axios';
import { toast } from 'react-toastify';

const API_KEY = '738a6f66ff183660055f916bcb383af9';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export function fetchPopularMovies() {
  return axios(`trending/movie/day?api_key=${API_KEY}`)
    .then(({ data }) => data.results)
    .catch(error => {
      toast.error(error.message);
    });
}

export function fetchQueryMovies(query) {
  return axios(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  )
    .then(({ data }) => data.results)
    .catch(error => {
      toast.error(error.message);
    });
}

export function fetchMovieInfo(movieId) {
  return axios(`movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data)
    .catch(error => {
      toast.error(error.message);
    });
}

export function fetchMovieCast(movieId) {
  return axios(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data.cast)
    .catch(error => {
      toast.error(error.message);
    });
}

export function fetchMovieReviews(movieId) {
  return axios(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  )
    .then(({ data }) => data.results)
    .catch(error => {
      toast.error(error.message);
    });
}
