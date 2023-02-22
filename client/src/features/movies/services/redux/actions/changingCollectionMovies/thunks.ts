/* eslint-disable promise/always-return */
import { IAppDispatch } from '@app/store';
import { getMovies } from '@features/movies/api';
import { failureMovies, requestMovies, successMovies } from './actionCreators';

export const loadMovies =
  (url: string): ((dispatch: IAppDispatch) => void) =>
  async (dispatch): Promise<void> => {
    dispatch(requestMovies());

    try {
      const movies = await getMovies(url);
      dispatch(successMovies(movies));
    } catch (reason) {
      dispatch(failureMovies(reason as string));
    }
  };
