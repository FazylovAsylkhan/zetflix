/* eslint-disable @typescript-eslint/default-param-last */
import {
  CardMovieActions,
  ICardMovieActions,
  ICardMovieState,
} from '../models';

const initialState = {
  formMovie: null,
  dynamicScreen: null,
};

export function changingCardMovieReducer(
  state = initialState,
  action: ICardMovieActions
): ICardMovieState {
  switch (action.type) {
    case CardMovieActions.RESET_FORM_MOVIE:
      return { ...state, formMovie: null };
    case CardMovieActions.SET_FORM_MOVIE:
      return { ...state, formMovie: action.payload };
    case CardMovieActions.RESET_DYNAMIC_SCREEN:
      return { ...state, dynamicScreen: null };
    case CardMovieActions.SET_DYNAMIC_SCREEN:
      return { ...state, dynamicScreen: action.payload };
    default:
      return state;
  }
}
