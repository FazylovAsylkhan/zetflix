/* eslint-disable @typescript-eslint/default-param-last */
import {
  FetchingMovieActions,
  IFetchingMovieActions,
  IFetchingMovieState,
} from '../models';

const initialState = {
  response: null,
  isFetching: false,
  error: null,
};

export function fetchingMovieReducer(
  state = initialState,
  action: IFetchingMovieActions
): IFetchingMovieState {
  switch (action.type) {
    case FetchingMovieActions.REQUEST:
      return { ...state, isFetching: true };
    case FetchingMovieActions.SUCCESS:
      return { ...state, isFetching: false, response: action.payload };
    case FetchingMovieActions.FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    case FetchingMovieActions.REMOVE:
      return initialState;
    default:
      return state;
  }
}
