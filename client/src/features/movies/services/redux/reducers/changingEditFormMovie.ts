/* eslint-disable @typescript-eslint/default-param-last */
import {
  ChangingEditFormMovieActions,
  IChangingEditFormMovieActions,
  IChangingEditFormMovieState,
} from '../models';

const initialState = {
  formValues: null,
};

export function changingEditFormMovieReducer(
  state = initialState,
  action: IChangingEditFormMovieActions
): IChangingEditFormMovieState {
  switch (action.type) {
    case ChangingEditFormMovieActions.RESET_FORM_MOVIE:
      return { ...state, formValues: null };
    case ChangingEditFormMovieActions.SET_FORM_MOVIE:
      return { ...state, formValues: action.payload };
    default:
      return state;
  }
}
