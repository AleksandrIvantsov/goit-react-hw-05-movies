const { useParams } = require('react-router-dom');

const Reviews = () => {
  const { movieId } = useParams();

  return <div>Reviews for movie id={movieId}</div>;
};

export default Reviews;
