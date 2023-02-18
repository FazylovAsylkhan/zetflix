/* eslint-disable promise/always-return */
import { IAppDispatch } from '@app/store';
import { getMovies } from '@features/movies/api';
import { failureMovies, requestMovies, successMovies } from './actionCreators';

export const loadMovies =
  (url: string): ((dispatch: IAppDispatch) => void) =>
  (dispatch): void => {
    dispatch(requestMovies());

    getMovies(url)
      .then((response) => {
        dispatch(successMovies(response));
      })
      .catch((reason) => {
        dispatch(failureMovies(reason as string));
      });
  };
