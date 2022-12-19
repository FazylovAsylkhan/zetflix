export enum MovieIdActions {
  RESET = 'changingMovieId/reset',
  SET = 'changingMovieId/set',
}
export interface IResetId {
  type: MovieIdActions.RESET;
}
export interface ISetId {
  type: MovieIdActions.SET;
  payload: string;
}

export type IMovieIdActions = IResetId | ISetId;
