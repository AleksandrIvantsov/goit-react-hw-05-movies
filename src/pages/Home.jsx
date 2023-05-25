import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function trendingMovies() {
      // setLoader(true);
      const visibleMovies = await getTrendingMovies();
      setMovies(visibleMovies.results);
      // setLoader(false);
    }
    trendingMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
