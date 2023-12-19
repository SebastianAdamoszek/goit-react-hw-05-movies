import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout.js';


const Home = lazy(() => import('../pages/Home/Home.js'));
const Movies = lazy(() => import('../pages/Movies/Movies.js'));
const NotFound = lazy(() => import('../pages/NoFound/NoFound.js'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails.js'));
const Cast = lazy(() => import('./Cast/Cast.js'));
const Reviews = lazy(() => import('./Reviews/Reviews.js'));

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
          Route index element={<Home />} /> 
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} /> 
        </Route>
      </Routes>
    
  );
};

export { App };
