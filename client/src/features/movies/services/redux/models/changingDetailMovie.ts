import { IMovie } from '@features/movies/api';

export interface IChangingDetailMovieState {
  response: null | IMovie;
  isFetching: boolean;
  error: null | string;
}

export enum ChangingDetailMovieActions {
  REQUEST = 'changingDetailMovie/request',
  SUCCESS = 'changingDetailMovie/success',
  FAILURE = 'changingDetailMovie/failure',
  REMOVE = 'changingDetailMovie/reset',
}

export interface IRequestMovie {
  type: ChangingDetailMovieActions.REQUEST;
}
export interface ISuccessMovie {
  type: ChangingDetailMovieActions.SUCCESS;
  payload: IMovie;
}
export interface IFailureMovie {
  type: ChangingDetailMovieActions.FAILURE;
  payload: null | string;
}
export interface IResetMovie {
  type: ChangingDetailMovieActions.REMOVE;
}
export type IChangingDetailMovieActions =
  | IRequestMovie
  | ISuccessMovie
  | IFailureMovie
  | IResetMovie;
