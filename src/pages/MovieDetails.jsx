import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState('');

  const { movieId } = useParams();
  const { title, vote_average, overview, poster_path } = movie;

  useEffect(() => {
    async function movieDetails() {
      // setLoader(true);
      const movieInfo = await getMovieDetails(movieId);
      setMovie(movieInfo);
      setGenres(movieInfo.genres.map(genre => genre.name).join(', '));
      // setLoader(false);
    }
    movieDetails();
  }, [movieId]);
  return (
    <>
      <button type="button">Go back</button>
      <div>
        <div>
          <img
            src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </div>
        <div>
          <h1>{title}</h1>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres}</p>
        </div>
      </div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
