/* eslint-disable @typescript-eslint/default-param-last */
import { ParamsActions, IParamsActions, IParamsState } from '../models';

const LIMITED_ITEMS = 'limit=9';
const SORT_BY_RELEASE_DATE = 'sortBy=release_date';
const SORT_ORDER_DESC = 'sortOrder=desc';
const SEARCH_BY_TITLE = 'searchBy=title';

const initialStateParams = {
  sortBy: SORT_BY_RELEASE_DATE,
  sortOrder: SORT_ORDER_DESC,
  search: '',
  searchBy: '',
  filter: '',
  limit: LIMITED_ITEMS,
};

export function changingParamsReducer(
  state = initialStateParams,
  action: IParamsActions
): IParamsState {
  switch (action.type) {
    case ParamsActions.SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case ParamsActions.SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload,
      };
    case ParamsActions.SEARCH:
      return {
        ...state,
        search: action.payload,
        searchBy: action.payload === '' ? '' : SEARCH_BY_TITLE,
      };
    case ParamsActions.SEARCH_BY:
      return {
        ...state,
        searchBy: action.payload,
      };
    case ParamsActions.FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case ParamsActions.LIMIT:
      return {
        ...state,
        limit: action.payload,
      };
    default:
      return state;
  }
}
