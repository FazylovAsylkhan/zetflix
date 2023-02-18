import { useAppDispatch } from '@common/hooks';
import {
  loadMovies,
  loadMovie,
  removeMovie,
} from '@features/movies/services/redux';
import { useEffect } from 'react';
import { NamesParams } from '../../../features/movies/layouts/shared';
import { getNormalizedUrl } from '../helpers';

export const useUpdateSearchPage = (
  searchParams: URLSearchParams,
  searchQuery: string | undefined
): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const movieId = searchParams.get(NamesParams.MOVIE_ID);
    movieId !== null ? loadMovie(movieId)(dispatch) : dispatch(removeMovie());

    const params = {
      search: searchQuery,
      genre: searchParams.get(NamesParams.GENRE),
      sortBy: searchParams.get(NamesParams.SORT_BY),
    };
    const url = getNormalizedUrl(params);

    loadMovies(url)(dispatch);
  }, [dispatch, searchQuery, searchParams]);
};
