import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { StyledSection } from './Home.styled';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState(null);
  const [error, setError] = useState(null);

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
  let number = 0;

  return (
    <StyledSection>
      <h1 className="title">Trending Today</h1>
      <ul className="movies-list">
        {validArr &&
          popularMovies.map(({ id, title }) => {
            number += 1;
            return (
              <li className="movies-list-item">
                <Link className="movies-list-link" to="" key={id}>
                  {number}&#41; {title}
                </Link>
              </li>
            );
          })}
      </ul>
    </StyledSection>
  );
};
