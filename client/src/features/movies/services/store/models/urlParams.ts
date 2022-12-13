export interface IUrlParamsState {
  sortBy: string;
  sortOrder: string;
  search: string;
  searchBy: string;
  filter: string;
  limit: string;
}

export enum UrlParamsActions {
  SORT_BY = 'urlParams/sortBy',
  SORT_ORDER = 'urlParams/sortOrder',
  SEARCH = 'urlParams/search',
  SEARCH_BY = 'urlParams/searchBy',
  FILTER = 'urlParams/filter',
  LIMIT = 'urlParams/limit',
}

export interface IActionSortBy {
  type: UrlParamsActions.SORT_BY;
  payload: string;
}
export interface IActionSortOrder {
  type: UrlParamsActions.SORT_ORDER;
  payload: string;
}
export interface IActionSearch {
  type: UrlParamsActions.SEARCH;
  payload: string;
}
export interface IActionSearchBy {
  type: UrlParamsActions.SEARCH_BY;
  payload: string;
}
export interface IActionFilter {
  type: UrlParamsActions.FILTER;
  payload: string;
}
export interface IActionLimit {
  type: UrlParamsActions.LIMIT;
  payload: string;
}

export type IUrlParamsActions =
  | IActionSortBy
  | IActionSortOrder
  | IActionSearch
  | IActionSearchBy
  | IActionFilter
  | IActionLimit;
