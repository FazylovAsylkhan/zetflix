/* eslint-disable @typescript-eslint/default-param-last */
import {
  UrlParamsActions,
  IUrlParamsActions,
  IUrlParamsState,
} from '../models';

const LIMITED_ITEMS = 'limit=9';
const SORT_BY_RELEASE_DATE = 'sortBy=release_date';
const SORT_ORDER_DESC = 'sortOrder=desc';
const SEARCH_BY_TITLE = 'searchBy=title';

const initialStateUrlParams = {
  sortBy: SORT_BY_RELEASE_DATE,
  sortOrder: SORT_ORDER_DESC,
  search: '',
  searchBy: '',
  filter: '',
  limit: LIMITED_ITEMS,
};

export function changingUrlParamsReducer(
  state = initialStateUrlParams,
  action: IUrlParamsActions
): IUrlParamsState {
  switch (action.type) {
    case UrlParamsActions.SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case UrlParamsActions.SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload,
      };
    case UrlParamsActions.SEARCH:
      return {
        ...state,
        search: action.payload,
        searchBy: action.payload === '' ? '' : SEARCH_BY_TITLE,
      };
    case UrlParamsActions.SEARCH_BY:
      return {
        ...state,
        searchBy: action.payload,
      };
    case UrlParamsActions.FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case UrlParamsActions.LIMIT:
      return {
        ...state,
        limit: action.payload,
      };
    default:
      return state;
  }
}
