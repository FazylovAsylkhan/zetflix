import { combineReducers } from 'redux';
import { movies } from '@features/movies/services/redux';

export const rootReducer = combineReducers({
  movies,
});
