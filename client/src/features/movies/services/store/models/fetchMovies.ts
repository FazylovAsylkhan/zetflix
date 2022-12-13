import { IMovie } from '@features/movies/api';

export interface IDataMovies {
  movies: IMovie[];
  totalAmount: number;
}

export interface IFetchMoviesState<T> {
  data: T;
  isFetching: boolean;
  error: null | string;
}

export enum FetchMoviesActions {
  REQUEST = 'fetchMovies/request',
  SUCCESS = 'fetchMovies/success',
  FAILURE = 'fetchMovies/failure',
}

export interface IActionRequest {
  type: FetchMoviesActions.REQUEST;
}
export interface IActionSuccess<T> {
  type: FetchMoviesActions.SUCCESS;
  payload: T;
}
export interface IActionFailure {
  type: FetchMoviesActions.FAILURE;
  payload: null | string;
}

export type IFetchMoviesActions<T> =
  | IActionRequest
  | IActionSuccess<T>
  | IActionFailure;
