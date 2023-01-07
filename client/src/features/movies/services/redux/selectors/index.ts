import { IRootState } from '@app/store';
import {
  ICardMovieState,
  ICollectionMoviesState,
  IUrlParamsState,
} from '../models';

export const selectAllMovies = (state: IRootState): ICollectionMoviesState =>
  state.movies.allMovies;

export const selectCardMovie = (state: IRootState): ICardMovieState =>
  state.movies.cardMovie;

export const selectUrlParams = (state: IRootState): IUrlParamsState =>
  state.movies.urlParams;
