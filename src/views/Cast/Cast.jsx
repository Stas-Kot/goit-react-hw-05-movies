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
        cast.map(({ profile_path, name, character }, index) => (
          <li className={s.castItem} key={index}>
            <img
              className={s.actorPhoto}
              src={profile_path ? imgBasePath + profile_path : noPhoto}
              alt={'here must be photo of ' + name + '...'}
            />

            <p>{name}</p>
            <p> Character: {character}</p>
          </li>
        ))}
    </ul>
  );
}
