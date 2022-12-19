import { IMovie } from '@features/movies/api';
import {
  FetchingMovieActions,
  IRequestMovie,
  ISuccessMovie,
  IFailureMovie,
  IRemoveMovie,
} from '../../models';

export const requestMovie = (): IRequestMovie => ({
  type: FetchingMovieActions.REQUEST,
});

export const successMovie = (response: IMovie): ISuccessMovie => ({
  type: FetchingMovieActions.SUCCESS,
  payload: response,
});

export const failureMovie = (messageError: string): IFailureMovie => ({
  type: FetchingMovieActions.FAILURE,
  payload: messageError,
});

export const removeMovie = (): IRemoveMovie => ({
  type: FetchingMovieActions.REMOVE,
});
