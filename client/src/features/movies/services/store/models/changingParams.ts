export interface IParamsState {
  sortBy: string;
  sortOrder: string;
  search: string;
  searchBy: string;
  filter: string;
  limit: string;
}
export enum ParamsActions {
  SORT_BY = 'changingParams/sortBy',
  SORT_ORDER = 'changingParams/sortOrder',
  SEARCH = 'changingParams/search',
  SEARCH_BY = 'changingParams/searchBy',
  FILTER = 'changingParams/filter',
  LIMIT = 'changingParams/limit',
}
export interface ISortBy {
  type: ParamsActions.SORT_BY;
  payload: string;
}
export interface ISortOrder {
  type: ParamsActions.SORT_ORDER;
  payload: string;
}
export interface ISearch {
  type: ParamsActions.SEARCH;
  payload: string;
}
export interface ISearchBy {
  type: ParamsActions.SEARCH_BY;
  payload: string;
}
export interface IFilter {
  type: ParamsActions.FILTER;
  payload: string;
}
export interface ILimit {
  type: ParamsActions.LIMIT;
  payload: string;
}
export type IParamsActions =
  | ISortBy
  | ISortOrder
  | ISearch
  | ISearchBy
  | IFilter
  | ILimit;
