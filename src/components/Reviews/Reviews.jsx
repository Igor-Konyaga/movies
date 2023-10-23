import { useEffect, useState } from 'react';
import { StyledReviewsBlock } from './Reviews.styled';
import { fetchMovieReviews } from 'services/api';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const movieReviews = async () => {
      const {
        data: { results },
      } = await fetchMovieReviews(movieId);

      console.log('results: ', results);

      setReviews(results);
    };
    movieReviews();
  }, [movieId]);

  const validArr = Array.isArray(reviews) && reviews.length;

  return (
    <StyledReviewsBlock>
      <ul className="list-reviews">
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => {
            return (
              <li className="list-reviews-item" key={id}>
                <p className="list-reviews-author">{author}</p>
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
