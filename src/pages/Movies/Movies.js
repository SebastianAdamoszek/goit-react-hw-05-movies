import React from 'react';
import { useState, useEffect } from 'react';
import { searchMovies } from 'Api/Api';
import Searchbar from 'components/SearchBar/SearchBar';
import Notiflix from 'notiflix';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchSearchMovies = async () => {
      if (query === '') {
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }

      try {
        const results = await searchMovies(query);
        if (results.length === 0 && query !== '') {
          Notiflix.Notify.warning(
            'Sorry, there are no results for your query! Please try again.'
          );
          return;
        }
        setMovies(results);
      } catch (error) {
        console.error('FetchSearchMovies error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchMovies();
  }, [query]);

  const handleSearch = searchQuery => {
    setMovies([]);
    setQuery(searchQuery);
  };

  return (
    <main>
      <Searchbar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      <MoviesList movies={movies} query={query} />
    </main>
  );
};
export default Movies;
