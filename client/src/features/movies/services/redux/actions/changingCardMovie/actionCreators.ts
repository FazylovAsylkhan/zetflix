import { ICardMovie } from '@features/movies/containers/cardsMovie';
import {
  CardMovieActions,
  IResetFormMovie,
  IResetDynamicScreen,
  ISetFormMovie,
  ISetDynamicScreen,
} from '../../models';

export const resetFormMovie = (): IResetFormMovie => ({
  type: CardMovieActions.RESET_FORM_MOVIE,
});
export const setFormMovie = (cardMovie: ICardMovie): ISetFormMovie => ({
  type: CardMovieActions.SET_FORM_MOVIE,
  payload: cardMovie,
});

export const resetDynamicScreen = (): IResetDynamicScreen => ({
  type: CardMovieActions.RESET_DYNAMIC_SCREEN,
});
export const setDynamicScreen = (cardMovie: ICardMovie): ISetDynamicScreen => ({
  type: CardMovieActions.SET_DYNAMIC_SCREEN,
  payload: cardMovie,
});
