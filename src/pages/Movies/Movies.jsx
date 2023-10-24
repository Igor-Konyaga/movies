import { useEffect, useState } from 'react';
import { StyledSection } from './Movies.styled';
import { fetchQueryMovie } from 'services/api';
import { Form } from './Form/Form';

export const Movies = () => {
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState([]);

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
  };

  return (
    <StyledSection>
      <Form onSumbit={onSubmitForm} />
      <ul className='movies-list'>
        {movies.length > 0 &&
          movies.map(({ original_title, id }) => {
            return (
              <li className='movies-list-item' key={id}>
                <p>{original_title}</p>
              </li>
            );
          })}
      </ul>
    </StyledSection>
  );
};
