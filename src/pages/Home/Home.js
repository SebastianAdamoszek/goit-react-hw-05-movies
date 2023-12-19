import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from 'Api/Api';
import Loader from 'components/Loader/Loader';
import css from './Home.module.css';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending()
      .then(data => {
        setTrendingMovies(data);
      })
      .catch(error => {
        console.error('getTrending error:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <main>
      <div>
        <h1 className={css.HomeHeading}>The most popular!!!</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <ul className={css.HomeList}>
            {trendingMovies.map(movie => (
              <Link
                to={`/movies/${movie.id}`}
                key={movie.id}
                className={css.HomeListLink}
              >
                <li className={css.HomeListItem}>
                  <img
                    className={css.HomeListImage}
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                    }
                    alt={movie.title}
                  />
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default Home;
