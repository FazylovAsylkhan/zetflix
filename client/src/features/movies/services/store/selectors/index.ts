import { IRootState } from '@app/store';
import { IDataMovies, IFetchMoviesState, IUrlParamsState } from '../models';

export const selectMovies = (
  state: IRootState
): IFetchMoviesState<IDataMovies> => state.movies;

export const selectUrlParams = (state: IRootState): IUrlParamsState =>
  state.urlParams;
