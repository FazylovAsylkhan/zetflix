/* eslint-disable promise/always-return */
import { IAppDispatch } from '@app/store';
import { getMovie } from '@features/movies/api';
import { failureMovie, requestMovie, successMovie } from './actionCreators';

export const loadMovie =
  (id: string): ((dispatch: IAppDispatch) => void) =>
  async (dispatch): Promise<void> => {
    dispatch(requestMovie());

    try {
      const movie = await getMovie(id);
      dispatch(successMovie(movie));
    } catch (reason) {
      dispatch(failureMovie(reason as string));
    }
  };
