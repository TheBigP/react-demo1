import { CALL_API } from '../middleware/api';

import {
  MOVIE_REQUEST,
  MOVIE_SUCCESS,
  MOVIE_FAILURE,
  SELECT_MOVIE,
} from '../constants/movie';

export const fetchMovies = ({ page = 1 }) => {
  return {
    [CALL_API]: {
      endpoint: `http://182.118.8.39:3000/vod_list?page=${page}`,
      types: [
        MOVIE_REQUEST,
        MOVIE_SUCCESS,
        MOVIE_FAILURE
      ],
    }
  }
};

export const fetchMoviesIfNeed = () => (dispatch, getState) => {
  if (getState().movies.list.length === 0) {
    dispatch(fetchMovies({ page: 1 }));
  }
};

export const selectMovie = movie => ({
  type: SELECT_MOVIE,
  movie,
});
