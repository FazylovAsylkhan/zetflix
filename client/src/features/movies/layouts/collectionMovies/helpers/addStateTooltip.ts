import { IMovie } from '@features/movies/api';
import { ICardMovie } from '../models';

export const addStateTooltip = (movies: IMovie[]): ICardMovie[] => {
  return movies.map((movie) => ({
    ...movie,
    stateTooltip: {
      isShownTooltip: false,
      isShownListOptions: false,
    },
  }));
};
