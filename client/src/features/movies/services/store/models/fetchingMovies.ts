import { IMovies } from '@features/movies/api';

export interface IFetchingMoviesState {
  response: null | IMovies;
  isFetching: boolean;
  error: null | string;
}

export enum FetchingMoviesActions {
  REQUEST = 'fetchingMovies/request',
  SUCCESS = 'fetchingMovies/success',
  FAILURE = 'fetchingMovies/failure',
}

export interface IRequestMovies {
  type: FetchingMoviesActions.REQUEST;
}
export interface ISuccessMovies {
  type: FetchingMoviesActions.SUCCESS;
  payload: IMovies;
}
export interface IFailureMovies {
  type: FetchingMoviesActions.FAILURE;
  payload: null | string;
}

export type IFetchingMoviesActions =
  | IRequestMovies
  | ISuccessMovies
  | IFailureMovies;
