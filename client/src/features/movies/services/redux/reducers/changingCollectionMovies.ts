/* eslint-disable @typescript-eslint/default-param-last */
import {
  CollectionMoviesActions,
  ICollectionMoviesActions,
  ICollectionMoviesState,
} from '../models';

const initialState = {
  response: null,
  isFetching: false,
  error: null,
};

export function changingCollectionMoviesReducer(
  state = initialState,
  action: ICollectionMoviesActions
): ICollectionMoviesState {
  switch (action.type) {
    case CollectionMoviesActions.REQUEST:
      return { ...state, isFetching: true };
    case CollectionMoviesActions.SUCCESS:
      return { ...state, isFetching: false, response: action.payload };
    case CollectionMoviesActions.FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
}
