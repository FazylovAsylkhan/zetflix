import { IMovie } from '@features/movies/api';
import {
  ChangingDetailMovieActions,
  IRequestMovie,
  ISuccessMovie,
  IFailureMovie,
  IResetMovie,
} from '../../models';

export const requestMovie = (): IRequestMovie => ({
  type: ChangingDetailMovieActions.REQUEST,
});

export const successMovie = (response: IMovie): ISuccessMovie => ({
  type: ChangingDetailMovieActions.SUCCESS,
  payload: response,
});

export const failureMovie = (messageError: string): IFailureMovie => ({
  type: ChangingDetailMovieActions.FAILURE,
  payload: messageError,
});

export const removeMovie = (): IResetMovie => ({
  type: ChangingDetailMovieActions.REMOVE,
});
