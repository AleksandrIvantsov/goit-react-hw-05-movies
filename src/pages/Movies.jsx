import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from 'services/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.searchQuery.value.trim()) {
      setSearchParams({ query: e.target.searchQuery.value.trim() });
    }
  };

  useEffect(() => {
    async function moviesBySearch() {
      // setLoader(true);
      const visibleMovies = await getMoviesBySearch(searchQuery);
      setMovies(visibleMovies.results);
      setQuery('');
      // setLoader(false);
    }
    if (searchQuery) {
      moviesBySearch();
    }
  }, [searchQuery]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="searchQuery"
          type="text"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
