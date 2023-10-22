import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import { StyledMovieSection, StyledSection } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const movieDetails = async () => {
      const { data } = await fetchMovieDetails(movieId);

      setMovieInfo(data);
    };

    movieDetails();
  }, [movieId]);

  const validObj = movieInfo !== null;

  return (
    <>
      <StyledMovieSection>
        {validObj && (
          <>
            <div className="img-wrraper">
              <img
                className="img"
                src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
                alt=""
              />
            </div>
            <div className="content">
              <div>
                <h2 className="title">{movieInfo.original_title}</h2>
                <p className="content-text">
                  Popularity: {Math.round(movieInfo.popularity)}
                </p>
              </div>
              <div>
                <h3 className="subtitle">Overview</h3>
                <p className="content-text">{movieInfo.overview}</p>
              </div>
              <div>
                <h3 className="subtitle">Genges</h3>
                <p className="content-text">
                  {movieInfo.genres.map(({ name, id }) => (
                    <span className="genre-item" key={id}>
                      {name}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </>
        )}
      </StyledMovieSection>

      <StyledSection>
        <ul className='movie-info-list'>
          <li className='list-item'>
            <Link className='link-item' to="cast">Cast</Link>
          </li>
          <li className='list-item'>
            <Link className='link-item' to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </StyledSection>
    </>
  );
};
