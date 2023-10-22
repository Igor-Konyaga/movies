import { useEffect, useState } from 'react';
import { StyledSection } from './Movies.styled';
import { fetchQueryMovie } from 'services/api';
import { Form } from './Form/Form';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';

export const Movies = () => {
  const [query, setQuery] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchSearchMovie = async () => {
      const {
        data: { results },
      } = await fetchQueryMovie(query);

      console.log(results);
    };
    fetchSearchMovie();
  }, [query]);

  return (
    <StyledSection>
      <Form />
    </StyledSection>
  );
};
