import { Routes, Route, NavLink } from 'react-router-dom';
import { StyledAppContainer } from './App.styled';

import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Suspense, lazy } from 'react';
import { TailSpin } from 'react-loader-spinner';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));

export const App = () => {
  return (
    <StyledAppContainer>
      <nav className="navigation">
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-link" to="/movies">
          Movies
        </NavLink>
      </nav>
      <Suspense
        fallback={
          <TailSpin
            height="60"
            width="60"
            color="#fd8451"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
          />
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </StyledAppContainer>
  );
};

//   const fetchPopulalMovies = async () => {
//     const {
//       data: { results },
//     } = await fetchTrendingMovies();

//     console.log(results);
//   };
//   fetchPopulalMovies();

//  const fetchSearchMovie = async () => {
//    const {
//      data: { results },
//    } = await fetchQueryMovie('ray');

//    console.log(results);
//  };
//  fetchSearchMovie();

//   const movieDetails = async () => {
//     const {data} = await fetchMovieDetails(290);

//     console.log(data);
//   };
//   movieDetails();

//   const movieActors = async () => {
//     const {
//       data: { cast, crew },
//     } = await fetchMovieActors(1677);
//   };
//   movieActors();

//   const movieReviews = async () => {
//     const {
//       data: { results },
//     } = await fetchMovieReviews(420818);
//     console.log('results: ', results);
//   };
//   movieReviews();
