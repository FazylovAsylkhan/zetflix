import { ICardMovie } from '@features/movies/containers/cardsMovie';

export interface ICardMovieState {
  formMovie: null | ICardMovie;
  dynamicScreen: null | ICardMovie;
}

export enum CardMovieActions {
  SET_FORM_MOVIE = 'changingCardMovie/setFormMovie',
  RESET_FORM_MOVIE = 'changingCardMovie/resetFormMovie',
  SET_DYNAMIC_SCREEN = 'changingCardMovie/setDynamicScreen',
  RESET_DYNAMIC_SCREEN = 'changingCardMovie/resetDynamicScreen',
}
export interface IResetFormMovie {
  type: CardMovieActions.RESET_FORM_MOVIE;
}
export interface IResetDynamicScreen {
  type: CardMovieActions.RESET_DYNAMIC_SCREEN;
}
export interface ISetFormMovie {
  type: CardMovieActions.SET_FORM_MOVIE;
  payload: null | ICardMovie;
}
export interface ISetDynamicScreen {
  type: CardMovieActions.SET_DYNAMIC_SCREEN;
  payload: null | ICardMovie;
}

export type ICardMovieActions =
  | IResetFormMovie
  | IResetDynamicScreen
  | ISetFormMovie
  | ISetDynamicScreen;
