import { combineReducers } from 'redux';
import {
  fetchMoviesReducer,
  urlParamsReducer,
} from '@features/movies/services/store';

export const rootReducer = combineReducers({
  movies: fetchMoviesReducer,
  urlParams: urlParamsReducer,
});
