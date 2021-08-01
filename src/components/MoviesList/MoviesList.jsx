import MoviesListItem from 'components/MoviesListItem/MoviesListItem';

export default function MoviesList({ movies }) {
  return (
    <ul>
      {movies &&
        movies.map(({ id, title }) => (
          <MoviesListItem key={id} id={id} title={title} />
        ))}
    </ul>
  );
}
