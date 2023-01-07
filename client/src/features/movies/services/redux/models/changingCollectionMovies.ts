import { IMovies } from '@features/movies/api';

export interface ICollectionMoviesState {
  response: null | IMovies;
  isFetching: boolean;
  error: null | string;
}

export enum CollectionMoviesActions {
  REQUEST = 'collectionMovies/request',
  SUCCESS = 'collectionMovies/success',
  FAILURE = 'collectionMovies/failure',
}

export interface IRequestMovies {
  type: CollectionMoviesActions.REQUEST;
}
export interface ISuccessMovies {
  type: CollectionMoviesActions.SUCCESS;
  payload: IMovies;
}
export interface IFailureMovies {
  type: CollectionMoviesActions.FAILURE;
  payload: null | string;
}

export type ICollectionMoviesActions =
  | IRequestMovies
  | ISuccessMovies
  | IFailureMovies;
