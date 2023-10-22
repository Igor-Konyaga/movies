import { Routes, Route, NavLink } from 'react-router-dom';
import { StyledAppContainer } from './App.styled';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';

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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" />
        </Route>
      </Routes>
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
