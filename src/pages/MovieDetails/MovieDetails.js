import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'Api/Api';
import Loader from 'components/Loader/Loader';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState(null);

  const location = useLocation();
  const prevLink = location.state?.from ?? '/movies';

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const details = await getMovieDetails(movieId);
        setMovieData(details);
      } catch (error) {
        console.error('FetchingMovieData error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (!movieData) {
    return (
      <main>
        <div>
          {isLoading ? (
            <Loader />
          ) : (
            <div className={css.Wrapper}>
              <Link to={prevLink} className={css.prevLink}>
                Prievious
              </Link>
              <h1 className={css.ErrorHeading}>Information unavailable</h1>
            </div>
          )}
        </div>
      </main>
    );
  }
  return (
    <main>
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={css.Wrapper}>
            <div>
              <Link to={prevLink} className={css.prevLink}>
                Prievious{' '}
              </Link>
            </div>
            <div>
              <img
                className={css.Image}
                src={
                  movieData.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
                    : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                }
                alt={movieData.title}
              />
            </div>
            <div className={css.Description}>
              <h1 className={css.Heading}>
                {movieData.title} ({movieData.release_date.split('-')[0]})
              </h1>
              <p>
                User Score: {Math.round((movieData.vote_average / 10) * 100)}%
              </p>
              {movieData.overview && (
                <>
                  <h2>Overview</h2>
                  <p className={css.Overview}>{movieData.overview}</p>
                </>
              )}
              {movieData.genres && (
                <>
                  <h3>Genres</h3>
                  <ul className={css.GenresList}>
                    {movieData.genres.map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <div className={css.MoreInfo}>
        <h2>More informations</h2>
        <ul className={css.List}>
          <li>
            <Link to="cast" className={css.Link}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={css.Link}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </main>
  );
};
export default MovieDetails;
