const { useParams } = require('react-router-dom');

const Cast = () => {
  const { movieId } = useParams();

  return <div>Cast for movie id={movieId}</div>;
};

export default Cast;
