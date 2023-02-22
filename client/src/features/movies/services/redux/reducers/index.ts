import { combineReducers } from 'redux';
import { changingCollectionMoviesReducer } from './changingCollectionMovies';
import { changingEditFormMovieReducer } from './changingEditFormMovie';
import { changingDetailMovieReducer } from './changingDetailMovie';

export const movies = combineReducers({
  collectionMovies: changingCollectionMoviesReducer,
  editFormMovie: changingEditFormMovieReducer,
  detailMovie: changingDetailMovieReducer,
});
