import { MovieIdActions, IResetId, ISetId } from '../../models';

export const resetMovieId = (): IResetId => ({
  type: MovieIdActions.RESET,
});

export const setMovieId = (id: number): ISetId => ({
  type: MovieIdActions.SET,
  payload: `${id}`,
});
