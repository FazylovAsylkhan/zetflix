export interface IUrlParamsState {
  sortBy: string;
  sortOrder: string;
  search: string;
  searchBy: string;
  filter: string;
  limit: string;
}
export enum UrlParamsActions {
  SORT_BY = 'changingUrlParams/sortBy',
  SORT_ORDER = 'changingUrlParams/sortOrder',
  SEARCH = 'changingUrlParams/search',
  SEARCH_BY = 'changingUrlParams/searchBy',
  FILTER = 'changingUrlParams/filter',
  LIMIT = 'changingUrlParams/limit',
}
export interface ISortBy {
  type: UrlParamsActions.SORT_BY;
  payload: string;
}
export interface ISortOrder {
  type: UrlParamsActions.SORT_ORDER;
  payload: string;
}
export interface ISearch {
  type: UrlParamsActions.SEARCH;
  payload: string;
}
export interface ISearchBy {
  type: UrlParamsActions.SEARCH_BY;
  payload: string;
}
export interface IFilter {
  type: UrlParamsActions.FILTER;
  payload: string;
}
export interface ILimit {
  type: UrlParamsActions.LIMIT;
  payload: string;
}
export type IUrlParamsActions =
  | ISortBy
  | ISortOrder
  | ISearch
  | ISearchBy
  | IFilter
  | ILimit;
