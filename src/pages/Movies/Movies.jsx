import { useEffect, useState } from 'react';
import { StyledSection } from './Movies.styled';
import { fetchQueryMovie } from 'services/api';
import { Form } from './Form/Form';
import { Link, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();



  let number = 0;

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchSearchMovie = async () => {
      const {
        data: { results },
      } = await fetchQueryMovie(query);

      console.log(results);

      setMovies(results);
    };

    fetchSearchMovie();
  }, [query]);

  const onSubmitForm = value => {
    setQuery(value);

    setSearchParams({ name: value });
  };

  return (
    <StyledSection>
      <Form onSumbit={onSubmitForm} />
      <ul className="movies-list">
        {movies.length > 0 &&
          movies.map(({ original_title, id }) => {
            number += 1;
            return (
              <li key={id} className="movies-list-item">
                <Link className="movies-list-link" to={`/movies/${id}`}>
                  {number}&#41; <span className="orange">{original_title}</span>
                </Link>
              </li>
            );
          })}
      </ul>
    </StyledSection>
  );
};
