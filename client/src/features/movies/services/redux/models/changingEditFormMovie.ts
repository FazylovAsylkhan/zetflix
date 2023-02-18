import { IMovie } from '@features/movies/api';

export interface IChangingEditFormMovieState {
  formValues: null | IMovie;
}

export enum ChangingEditFormMovieActions {
  SET_FORM_MOVIE = 'changingEditFormMovie/setFormMovie',
  RESET_FORM_MOVIE = 'changingEditFormMovie/resetFormMovie',
}
export interface IResetFormMovie {
  type: ChangingEditFormMovieActions.RESET_FORM_MOVIE;
}
export interface ISetFormMovie {
  type: ChangingEditFormMovieActions.SET_FORM_MOVIE;
  payload: null | IMovie;
}

export type IChangingEditFormMovieActions = IResetFormMovie | ISetFormMovie;
