import { useState, useEffect } from 'react';
import * as API from '../../services/api';
import { useParams } from 'react-router-dom';
import s from './Cast.module.css';
import noPhoto from '../../images/Nophoto.jpg';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const imgBasePath = 'https://image.tmdb.org/t/p/w500';
  const { movieId } = useParams();

  useEffect(() => {
    API.fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map(actor => (
          <li key={actor.id}>
            <img
              className={s.actorPhoto}
              src={
                imgBasePath + actor.profile_path !==
                'https://image.tmdb.org/t/p/w500null'
                  ? imgBasePath + actor.profile_path
                  : noPhoto
              }
              alt=""
            />
            <p>{actor.name}</p>
            <p> Character: {actor.character}</p>
          </li>
        ))}
    </ul>
  );
}
