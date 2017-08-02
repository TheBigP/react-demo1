import { combineReducers } from 'redux';

import weixin from './weixin';
import movies from './movies';
import select_movie from './select_movie';
import todos from './todos';


const rootReducer = combineReducers({
  weixin,
  movies,
  select_movie,
  todos,
});

export default rootReducer;
