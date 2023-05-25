import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function movieReviews() {
      // setLoader(true);
      const movieInfoReviews = await getMovieReviews(movieId);
      setReviews(movieInfoReviews.results);
      // setLoader(false);
    }
    movieReviews();
  }, [movieId]);

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
