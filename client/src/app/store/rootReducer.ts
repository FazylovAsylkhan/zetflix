import { combineReducers } from 'redux';
import { movies } from '@features/movies/services/store';

export const rootReducer = combineReducers({
  movies,
});
