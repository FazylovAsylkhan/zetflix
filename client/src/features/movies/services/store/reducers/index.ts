import { combineReducers } from 'redux';
import { changingParamsReducer } from './changingParams';
import { fetchingMoviesReducer } from './fetchingMovies';
import { fetchingMovieReducer } from './fetchingMovie';
import { changingMovieIdReducer } from './changingMovieId';

export const movies = combineReducers({
  allMovies: fetchingMoviesReducer,
  selectedMovieById: fetchingMovieReducer,
  params: changingParamsReducer,
  movieId: changingMovieIdReducer,
});
