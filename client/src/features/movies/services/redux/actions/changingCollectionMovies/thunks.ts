/* eslint-disable promise/always-return */
import { IAppDispatch } from '@app/store';
import {
  deleteMovie,
  getMovies,
  IMovie,
  postMovie,
} from '@features/movies/api';
import { failureMovies, requestMovies, successMovies } from './actionCreators';

export const getCollectionMovies =
  (urlParams: string): ((dispatch: IAppDispatch) => void) =>
  (dispatch): void => {
    dispatch(requestMovies());

    getMovies(urlParams)
      .then((response) => {
        dispatch(successMovies(response));
      })
      .catch((reason) => {
        dispatch(failureMovies(reason as string));
      });
  };

export function deleteMovieFromCollection(
  id: string,
  urlParams: string
): (dispatch: IAppDispatch) => Promise<void> {
  return async (dispatch) => {
    try {
      dispatch(requestMovies());
      await deleteMovie(id);
      const response = await getMovies(urlParams);

      dispatch(successMovies(response));
    } catch (reason) {
      dispatch(failureMovies(reason as string));
    }
  };
}

export function addMovieInCollection(
  movie: IMovie,
  urlParams: string
): (dispatch: IAppDispatch) => Promise<void> {
  return async (dispatch) => {
    try {
      dispatch(requestMovies());
      await postMovie(movie);
      const response = await getMovies(urlParams);

      dispatch(successMovies(response));
    } catch (reason) {
      dispatch(failureMovies(reason as string));
    }
  };
}
