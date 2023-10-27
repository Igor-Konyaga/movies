import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { StyledSection } from './Home.styled';
import { Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let number = 0;

  useEffect(() => {
    fetchPopulalMovies();
  }, []);

  const fetchPopulalMovies = async () => {
    try {
      setIsLoading(true);
      const {
        data: { results },
      } = await fetchTrendingMovies();
      setPopularMovies(results);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const validArr = Array.isArray(popularMovies) && popularMovies.length;

  return (
    <StyledSection>
      <h1 className="title">Trending Today</h1>
      {error !== null && <p className="error">{error}</p>}
      {isLoading && (
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
      )}
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
