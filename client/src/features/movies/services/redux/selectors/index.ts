import { IRootState } from '@app/store';
import {
  IChangingEditFormMovieState,
  ICollectionMoviesState,
  IChangingDetailMovieState,
} from '../models';

export const selectCollectionMovies = (
  state: IRootState
): ICollectionMoviesState => state.movies.collectionMovies;

export const selectEditFormMovie = (
  state: IRootState
): IChangingEditFormMovieState => state.movies.editFormMovie;

export const selectDetailMovie = (
  state: IRootState
): IChangingDetailMovieState => state.movies.detailMovie;
