import { combineReducers } from 'redux';
import { fetchMoviesReducer } from '@features/movies/services/fetchMovies';

export const rootReducer = combineReducers({
  fetchMoviesReducer,
});
