import { useEffect, useState } from 'react';
import { StyledReviewsBlock } from './Reviews.styled';
import { fetchMovieReviews } from 'services/api';
import { useParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const movieReviews = async () => {
      setIsLoading(true);
      try {
        const {
          data: { results },
        } = await fetchMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    movieReviews();
  }, [movieId]);

  return (
    <StyledReviewsBlock>
      {error !== null && <p className="error">{error}</p>}
      {isLoading && (
        <TailSpin
          className="loader"
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
      <ul className="list-reviews">
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => {
            return (
              <li className="list-reviews-item" key={id}>
                <p className="list-reviews-author">Author: {author}</p>
                <p className="list-reviews-content">{content}</p>
              </li>
            );
          })
        ) : (
          <p>No reviews</p>
        )}
      </ul>
    </StyledReviewsBlock>
  );
};
