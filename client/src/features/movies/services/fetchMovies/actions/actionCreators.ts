import { IGetMoviesResponse } from '@features/movies/api';
import { ICardMovie } from '@features/movies/containers/cardsMovie';
import {
  IActionFailure,
  IActionRequest,
  IActionSuccess,
  ActionTypes,
} from './actionTypes';

export const request = (): IActionRequest => ({
  type: ActionTypes.REQUEST,
});

export const success = (
  response: IGetMoviesResponse
): IActionSuccess<ICardMovie[]> => {
  const cards = response.data.map((movie) => ({
    ...movie,
    stateTooltip: {
      isShownTooltip: false,
      isShownListOptions: false,
    },
  }));
  const payload = {
    cards,
    totalAmount: response.totalAmount,
  };

  return { type: ActionTypes.SUCCESS, payload };
};

export const failure = (messageError: string): IActionFailure => ({
  type: ActionTypes.FAILURE,
  payload: messageError,
});
