import { IMovie } from '@features/movies/api';

export interface IFetchingMovieState {
  response: null | IMovie;
  isFetching: boolean;
  error: null | string;
}

export enum FetchingMovieActions {
  REQUEST = 'fetchingMovie/request',
  SUCCESS = 'fetchingMovie/success',
  FAILURE = 'fetchingMovie/failure',
  REMOVE = 'fetchingMovie/remove',
}

export interface IRequestMovie {
  type: FetchingMovieActions.REQUEST;
}
export interface ISuccessMovie {
  type: FetchingMovieActions.SUCCESS;
  payload: IMovie;
}
export interface IFailureMovie {
  type: FetchingMovieActions.FAILURE;
  payload: null | string;
}
export interface IRemoveMovie {
  type: FetchingMovieActions.REMOVE;
}
export type IFetchingMovieActions =
  | IRequestMovie
  | ISuccessMovie
  | IFailureMovie
  | IRemoveMovie;
