/* eslint-disable @typescript-eslint/default-param-last */
import { ICardMovie } from '@features/movies/containers/cardsMovie';
import { IActions, ActionTypes } from '../actions/actionTypes';
import { IFetchMoviesState } from '../models';

const initialState: IFetchMoviesState<ICardMovie[]> = {
  data: {
    cards: [],
    totalAmount: 0,
  },
  isFetching: false,
  error: null,
};

export const fetchMoviesReducer = (
  state = initialState,
  action: IActions<ICardMovie[]>
): IFetchMoviesState<ICardMovie[]> => {
  switch (action.type) {
    case ActionTypes.REQUEST:
      return { ...state, isFetching: true };
    case ActionTypes.SUCCESS:
      return { ...state, isFetching: false, data: action.payload };
    case ActionTypes.FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};
