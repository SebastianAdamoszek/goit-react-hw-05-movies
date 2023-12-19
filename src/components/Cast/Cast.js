import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'Api/Api';
import Loader from 'components/Loader/Loader';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const details = await getMovieCredits(movieId);
        setMovieCast(details);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  if (!movieCast || movieCast.length === 0) {
    return (
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <h1 className={css.ErrorHeading}>Images unavailable </h1>
        )}
      </div>
    );
  }
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.CastList}>
          {movieCast.map(cast => (
            <li key={cast.id} className={css.ListItem}>
              <div className={css.ActorContainer}>
                <img
                  className={css.ActorImage}
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                      : 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'
                  }
                  alt={cast.original_name}
                />
                <div className={css.ActorInfo}>
                  <p className={css.ActorName}>
                    <strong>{cast.name}</strong>
                  </p>
                  <p className={css.ActorCharacter}>
                    <strong>Character:</strong> {cast.character}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
