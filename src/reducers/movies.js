import {
  MOVIE_REQUEST, MOVIE_SUCCESS, MOVIE_FAILURE,
} from '../constants/movie';

const movies = (state = {
  isFetching: false,
  list: [],
  err: null,
}, action) => {
  switch (action.type) {
  case MOVIE_REQUEST:
    return {
      ...state,
      isFetching: true,
    }
  case MOVIE_SUCCESS:
    return {
      ...state,
      isFetching: false,
      list: action.response.data.children.map(child => child.data),
    }
  case MOVIE_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: action.error
    }
  default:
    return state;
  }
};
export default movies;
