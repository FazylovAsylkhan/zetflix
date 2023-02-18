/* eslint-disable @typescript-eslint/default-param-last */
import {
  ChangingDetailMovieActions,
  IChangingDetailMovieState,
  IChangingDetailMovieActions,
} from '../models';

const initialState = {
  response: null,
  isFetching: false,
  error: null,
};

export function changingDetailMovieReducer(
  state = initialState,
  action: IChangingDetailMovieActions
): IChangingDetailMovieState {
  switch (action.type) {
    case ChangingDetailMovieActions.REQUEST:
      return { ...state, isFetching: true };
    case ChangingDetailMovieActions.SUCCESS:
      return { ...state, isFetching: false, response: action.payload };
    case ChangingDetailMovieActions.FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    case ChangingDetailMovieActions.REMOVE:
      return initialState;
    default:
      return state;
  }
}
