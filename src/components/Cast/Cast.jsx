import { useEffect, useState } from 'react';
import { StyledCastBlock } from './Cast.styled';
import { fetchMovieActors } from 'services/api';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();

  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const movieActors = async () => {
      const {
        data: { cast },
      } = await fetchMovieActors(movieId);

      setMovieCast(cast);

      console.log('cast: ', cast);
    };

    movieActors();
  }, [movieId]);

  const validArr = Array.isArray(movieCast) && movieCast.length;

  return <StyledCastBlock>{validArr && <p>CAST</p>}</StyledCastBlock>;
};
