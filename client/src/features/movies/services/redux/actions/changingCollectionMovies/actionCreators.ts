import { IMovies } from '@features/movies/api';
import {
  CollectionMoviesActions,
  IRequestMovies,
  ISuccessMovies,
  IFailureMovies,
} from '../../models';

export const requestMovies = (): IRequestMovies => ({
  type: CollectionMoviesActions.REQUEST,
});

export const successMovies = (response: IMovies): ISuccessMovies => ({
  type: CollectionMoviesActions.SUCCESS,
  payload: response,
});

export const failureMovies = (messageError: string): IFailureMovies => ({
  type: CollectionMoviesActions.FAILURE,
  payload: messageError,
});
