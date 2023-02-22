import { IMovie } from '@features/movies/api';
import {
  ChangingEditFormMovieActions,
  IResetFormMovie,
  ISetFormMovie,
} from '../../models';

export const resetFormMovie = (): IResetFormMovie => ({
  type: ChangingEditFormMovieActions.RESET_FORM_MOVIE,
});
export const setFormMovie = (cardMovie: IMovie): ISetFormMovie => ({
  type: ChangingEditFormMovieActions.SET_FORM_MOVIE,
  payload: cardMovie,
});
