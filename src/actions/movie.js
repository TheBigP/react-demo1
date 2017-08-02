import { CALL_API } from '../middleware/api';

import {
  MOVIE_REQUEST, MOVIE_SUCCESS, MOVIE_FAILURE, SELECT_MOVIE
} from '../constants/movie';

const fetchMovies = () => {
  return {
    [CALL_API]: {
      endpoint: 'https://www.reddit.com/r/reactjs.json',
      types: [MOVIE_REQUEST, MOVIE_SUCCESS, MOVIE_FAILURE],
    }
  }
};
export const fetchMoviesIfNeed = () => (dispatch, getState) => {
  if (getState().movies.list.length === 0) {
    dispatch(fetchMovies());
  }
};

export const selectMovie = movie => ({
  type: SELECT_MOVIE,
  movie,
});
