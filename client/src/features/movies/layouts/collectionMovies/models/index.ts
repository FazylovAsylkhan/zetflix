import { IMovie } from '@features/movies/api';

export interface IStateTooltip {
  isShownTooltip: boolean;
  isShownListOptions: boolean;
}
export interface ICardMovie extends IMovie {
  stateTooltip: IStateTooltip;
}
export interface IMenuGenre {
  isActive: boolean;
  value: string;
}
