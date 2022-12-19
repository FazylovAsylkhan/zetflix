import { IMovies } from '@features/movies/api';
import {
  FetchingMoviesActions,
  IRequestMovies,
  ISuccessMovies,
  IFailureMovies,
} from '../../models';

export const requestMovies = (): IRequestMovies => ({
  type: FetchingMoviesActions.REQUEST,
});

export const successMovies = (response: IMovies): ISuccessMovies => ({
  type: FetchingMoviesActions.SUCCESS,
  payload: response,
});

export const failureMovies = (messageError: string): IFailureMovies => ({
  type: FetchingMoviesActions.FAILURE,
  payload: messageError,
});
