import axios from 'axios';

export const fetchTrendingMovies = async () => {
  const data = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=5e04fb1627d0ee7031fba3a011278add'
  );

  return data;
};

export const fetchQueryMovie = async query => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=5e04fb1627d0ee7031fba3a011278add&query=${query}`
  );

  return data;
};

export const fetchMovieDetails = async id => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=5e04fb1627d0ee7031fba3a011278add`
  );

  return data;
};
export const fetchMovieActors = async id => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5e04fb1627d0ee7031fba3a011278add`
  );

  return data;
};
export const fetchMovieReviews = async id => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=5e04fb1627d0ee7031fba3a011278add`
  );

  return data;
};
