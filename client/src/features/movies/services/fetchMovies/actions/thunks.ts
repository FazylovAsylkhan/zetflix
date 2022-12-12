/* eslint-disable promise/always-return */
import { IAppDispatch } from '@app/store';
import { getMovies } from '@features/movies/api';
import { failure, request, success } from './actionCreators';

export const loadMovies =
  (urlParams = ''): ((dispatch: IAppDispatch) => void) =>
  (dispatch): void => {
    dispatch(request());

    getMovies(urlParams)
      .then((response) => {
        dispatch(success(response));
      })
      .catch((reason) => {
        dispatch(failure(reason as string));
      });
  };
