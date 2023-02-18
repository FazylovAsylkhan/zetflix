import { SelectOptions } from '../constants';

export const getSortingParam = (sorting: string): string => {
  const SORTING_VOTE_AVERAGE = 'vote_average';
  const SORTING_VOTE_COUNT = 'vote_count';

  switch (sorting) {
    case SelectOptions.POPULARITY:
      return SORTING_VOTE_AVERAGE;
    case SelectOptions.VOTE_COUNT:
      return SORTING_VOTE_COUNT;
    case SelectOptions.BUDGET:
      return sorting;
    default:
      return '';
  }
};
