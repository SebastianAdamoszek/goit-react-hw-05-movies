import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'e8ab892b2ac2cd96b9f442270f7b9c45';

// Pobieranie aktualnie najpopularniejszych filmów
const getTrending = async () => {
  try {
    const response = await axios.get(`trending/all/day?api_key=${API_KEY}`);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(response.data.results);
      }, 500);
    });
  } catch (error) {
    console.log('getTrending error:', error);
  }
};

// Wyszukiwanie filmu po słowie kluczowym
const searchMovies = async query => {
  try {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${query}`
    );
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(response.data.results);
      }, 500);
    });
  } catch (error) {
    console.log('searchMovies error:', error);
  }
};

// Pobieranie wszytkich informacji o filmie
const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(response.data);
      }, 1000);
    });
  } catch (error) {
    console.error('getMovieDetails error:', error);
  }
};

// Pobieranie informacji o aktorach w danym filmie
const getMovieCredits = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(response.data.cast);
      }, 500);
    });
  } catch (error) {
    console.error('getMovieCredits error:', error);
  }
};

// Pobieranie recenzji o filmie
const getMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(response.data.results);
      }, 500);
    });
  } catch (error) {
    console.error('getMovieReviews error:', error);
  }
};

export {
  getTrending,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
