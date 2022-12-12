export enum ActionTypes {
  REQUEST = 'fetchMovies/request',
  SUCCESS = 'fetchMovies/success',
  FAILURE = 'fetchMovies/failure',
}

export interface IActionRequest {
  type: ActionTypes.REQUEST;
}
export interface IActionSuccess<T> {
  type: ActionTypes.SUCCESS;
  payload: {
    cards: T;
    totalAmount: number;
  };
}
export interface IActionFailure {
  type: ActionTypes.FAILURE;
  payload: null | string;
}
export type IActions<T> = IActionRequest | IActionSuccess<T> | IActionFailure;
