/* eslint-disable @typescript-eslint/default-param-last */
import {
  IFetchMoviesActions,
  FetchMoviesActions,
  IFetchMoviesState,
  IDataMovies,
} from '../models';

const initialState: IFetchMoviesState<IDataMovies> = {
  data: {
    movies: [],
    totalAmount: 0,
  },
  isFetching: false,
  error: null,
};

export function fetchMoviesReducer(
  state = initialState,
  action: IFetchMoviesActions<IDataMovies>
): IFetchMoviesState<IDataMovies> {
  switch (action.type) {
    case FetchMoviesActions.REQUEST:
      return { ...state, isFetching: true };
    case FetchMoviesActions.SUCCESS:
      return { ...state, isFetching: false, data: action.payload };
    case FetchMoviesActions.FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
