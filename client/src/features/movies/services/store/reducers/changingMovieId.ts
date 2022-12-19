/* eslint-disable @typescript-eslint/default-param-last */
import { MovieIdActions, IMovieIdActions } from '../models';

export function changingMovieIdReducer(
  state = '',
  action: IMovieIdActions
): string {
  switch (action.type) {
    case MovieIdActions.RESET:
      return '';
    case MovieIdActions.SET:
      return action.payload;
    default:
      return state;
  }
}
