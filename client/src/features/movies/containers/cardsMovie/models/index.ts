import { IMovie } from '@features/movies/api';

export interface ICardMovie extends IMovie {
  stateTooltip: {
    isShownTooltip: boolean;
    isShownListOptions: boolean;
  };
}
