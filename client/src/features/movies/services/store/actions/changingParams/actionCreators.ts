import {
  ParamsActions,
  ISortBy,
  ISortOrder,
  ISearch,
  ISearchBy,
  IFilter,
  ILimit,
} from '../../models';

export const sortBy = (value: string): ISortBy => ({
  type: ParamsActions.SORT_BY,
  payload: `sortBy=${value}`,
});

export const sortOrder = (value: string): ISortOrder => ({
  type: ParamsActions.SORT_ORDER,
  payload: `sortOrder=${value}`,
});

export const search = (value: string): ISearch => {
  return {
    type: ParamsActions.SEARCH,
    payload: value === '' ? '' : `search=${value}`,
  };
};

export const searchBy = (value: string): ISearchBy => ({
  type: ParamsActions.SEARCH_BY,
  payload: `searchBy=${value}`,
});

export const filter = (value: string): IFilter => ({
  type: ParamsActions.FILTER,
  payload: value === 'all' ? '' : `filter=${value}`,
});

export const limit = (value: string): ILimit => ({
  type: ParamsActions.LIMIT,
  payload: `limit=${value}`,
});
