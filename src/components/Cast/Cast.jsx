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
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <StyledCastBlock>
      {validArr && (
        <ul className="list-cast">
          {movieCast.map(({ id, name, character, profile_path }) => {
            return (
              <li className="list-cast-item" key={id}>
                <div className="img-wrraper">
                  <img
                    className="list-cast-img"
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/original${profile_path}`
                        : defaultImg
                    }
                    alt={name}
                  />
                </div>
                <div className='list-cast-body'>
					 <p className="list-cast-info">{name}</p>
                <p>Character: {character}</p>
					 </div>
              </li>
            );
          })}
        </ul>
      )}
    </StyledCastBlock>
  );
};
