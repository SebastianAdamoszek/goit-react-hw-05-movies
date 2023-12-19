import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <div className={css.MovieListBox}>
      <ul className={css.MovieList}>
        {movies.map(movie => (
          <li key={movie.id} className={css.MovieListItem}>
            <Link
              to={`${movie.id}`}
              state={{ from: location }}
              className={css.MovieListLink}
            ><span className={css.MovieListStyle}></span>
              {movie.title} ({movie.release_date.split('-')[0]})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default MoviesList;
