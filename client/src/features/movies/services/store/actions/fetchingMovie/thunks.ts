/* eslint-disable promise/always-return */
import { IAppDispatch } from '@app/store';
import { getMovie } from '@features/movies/api';
import { failureMovie, requestMovie, successMovie } from './actionCreators';

export const fetchingMovie =
  (id: string): ((dispatch: IAppDispatch) => void) =>
  (dispatch): void => {
    dispatch(requestMovie());

    getMovie(id)
      .then((response) => {
        dispatch(successMovie(response));
      })
      .catch((reason) => {
        dispatch(failureMovie(reason as string));
      });
  };
