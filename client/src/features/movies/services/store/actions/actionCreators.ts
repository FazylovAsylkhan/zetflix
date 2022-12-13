import { IGetMoviesResponse } from '@features/movies/api';
import {
  IActionFailure,
  IActionRequest,
  IActionSuccess,
  FetchMoviesActions,
  IDataMovies,
  UrlParamsActions,
} from '../models';
import {
  IActionFilter,
  IActionLimit,
  IActionSearch,
  IActionSearchBy,
  IActionSortBy,
} from '../models/urlParams';

export const request = (): IActionRequest => ({
  type: FetchMoviesActions.REQUEST,
});

export const success = (
  response: IGetMoviesResponse
): IActionSuccess<IDataMovies> => {
  const payload = {
    movies: response.data,
    totalAmount: response.totalAmount,
  };

  return { type: FetchMoviesActions.SUCCESS, payload };
};

export const failure = (messageError: string): IActionFailure => ({
  type: FetchMoviesActions.FAILURE,
  payload: messageError,
});

export const sortBy = (value: string): IActionSortBy => ({
  type: UrlParamsActions.SORT_BY,
  payload: `sortBy=${value}`,
});

export const search = (value: string): IActionSearch => {
  return {
    type: UrlParamsActions.SEARCH,
    payload: value === '' ? '' : `search=${value}`,
  };
};

export const searchBy = (value: string): IActionSearchBy => ({
  type: UrlParamsActions.SEARCH_BY,
  payload: `searchBy=${value}`,
});

export const filter = (value: string): IActionFilter => ({
  type: UrlParamsActions.FILTER,
  payload: value === 'all' ? '' : `filter=${value}`,
});

export const limit = (value: string): IActionLimit => ({
  type: UrlParamsActions.LIMIT,
  payload: `limit=${value}`,
});
