import {
  UrlParamsActions,
  ISortBy,
  ISortOrder,
  ISearch,
  ISearchBy,
  IFilter,
  ILimit,
} from '../../models';

export const sortBy = (value: string): ISortBy => ({
  type: UrlParamsActions.SORT_BY,
  payload: `sortBy=${value}`,
});

export const sortOrder = (value: string): ISortOrder => ({
  type: UrlParamsActions.SORT_ORDER,
  payload: `sortOrder=${value}`,
});

export const search = (value: string): ISearch => {
  return {
    type: UrlParamsActions.SEARCH,
    payload: value === '' ? '' : `search=${value}`,
  };
};

export const searchBy = (value: string): ISearchBy => ({
  type: UrlParamsActions.SEARCH_BY,
  payload: `searchBy=${value}`,
});

export const filter = (value: string): IFilter => ({
  type: UrlParamsActions.FILTER,
  payload: value === 'all' ? '' : `filter=${value}`,
});

export const limit = (value: string): ILimit => ({
  type: UrlParamsActions.LIMIT,
  payload: `limit=${value}`,
});
