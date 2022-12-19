/* eslint-disable @typescript-eslint/default-param-last */
import {
  FetchingMoviesActions,
  IFetchingMoviesActions,
  IFetchingMoviesState,
} from '../models';

const initialState = {
  response: null,
  isFetching: false,
  error: null,
};

export function fetchingMoviesReducer(
  state = initialState,
  action: IFetchingMoviesActions
): IFetchingMoviesState {
  switch (action.type) {
    case FetchingMoviesActions.REQUEST:
      return { ...state, isFetching: true };
    case FetchingMoviesActions.SUCCESS:
      return { ...state, isFetching: false, response: action.payload };
    case FetchingMoviesActions.FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
