import { IRootState } from '@app/store';
import {
  IFetchingMoviesState,
  IFetchingMovieState,
  IParamsState,
} from '../models';

export const selectAllMovies = (state: IRootState): IFetchingMoviesState =>
  state.movies.allMovies;

export const selectMovie = (state: IRootState): IFetchingMovieState =>
  state.movies.selectedMovieById;

export const selectParams = (state: IRootState): IParamsState =>
  state.movies.params;

export const selectMovieId = (state: IRootState): string =>
  state.movies.movieId;
