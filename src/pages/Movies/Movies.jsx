import { useEffect, useState } from 'react';
import { StyledSection } from './Movies.styled';
import { fetchQueryMovie } from 'services/api';
import { Form } from './Form/Form';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get('name');

  let number = 0;

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchSearchMovie = async () => {
      setIsLoading(true);
      try {
        const {
          data: { results },
        } = await fetchQueryMovie(query);

        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchMovie();
  }, [query]);

  const onSubmitForm = value => {
    setSearchParams({ name: value });
  };

  return (
    <StyledSection>
      <Form onSumbit={onSubmitForm} />
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
        {movies.length > 0 &&
          movies.map(({ original_title, id }) => {
            number += 1;
            return (
              <li key={id} className="movies-list-item">
                <Link
                  state={{ from: location }}
                  className="movies-list-link"
                  to={`/movies/${id}`}
                >
                  {number}&#41; <span className="orange">{original_title}</span>
                </Link>
              </li>
            );
          })}
      </ul>
    </StyledSection>
  );
};

export default Movies;
