import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '608a612cc746968ead61312fe4955129';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};
