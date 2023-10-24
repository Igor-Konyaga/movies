import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { StyledSection } from './Home.styled';
import { Link, useLocation } from 'react-router-dom';

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState(null);
  const [error, setError] = useState(null);

  let number = 0;

  useEffect(() => {
    fetchPopulalMovies();
  }, []);

  const fetchPopulalMovies = async () => {
    try {
      const {
        data: { results },
      } = await fetchTrendingMovies();
      setPopularMovies(results);
    } catch (error) {
      setError(error.message);
    } finally {
    }
  };

  const validArr = Array.isArray(popularMovies) && popularMovies.length;

  return (
    <StyledSection>
      <h1 className="title">Trending Today</h1>
      <ul className="movies-list">
        {validArr &&
          popularMovies.map(({ id, title }) => {
            number += 1;
            return (
              <li key={id} className="movies-list-item">
                <Link className="movies-list-link" to={`/movies/${id}`}>
                  {number}&#41; <span className="orange">{title}</span>
                </Link>
              </li>
            );
          })}
      </ul>
    </StyledSection>
  );
};
