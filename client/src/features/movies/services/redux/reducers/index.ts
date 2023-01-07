import { combineReducers } from 'redux';
import { changingUrlParamsReducer } from './changingUrlParams';
import { changingCollectionMoviesReducer } from './changingCollectionMovies';
import { changingCardMovieReducer } from './changingCardMovie';

export const movies = combineReducers({
  allMovies: changingCollectionMoviesReducer,
  urlParams: changingUrlParamsReducer,
  cardMovie: changingCardMovieReducer,
});
