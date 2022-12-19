import React, { useLayoutEffect } from 'react';
import { SearchPanelMovie } from '@features/movies/containers';
import { LoaderScreen } from './components/loaderScreen';
import { Loader } from '@common/components';
import { useAppDispatch, useAppSelector } from '@common/hooks';
import {
  fetchingMovie,
  removeMovie,
  selectMovie,
  selectMovieId,
} from '@features/movies/services/store';

const DetailMovie = React.lazy(
  async () => await import('@features/movies/containers/detailMovie')
);

export function DynamicScreen(): JSX.Element {
  const { response, isFetching, error } = useAppSelector(selectMovie);

  const dispatch = useAppDispatch();
  const movieId = useAppSelector(selectMovieId);

  useLayoutEffect(() => {
    const hasMovieId = movieId !== '';
    hasMovieId ? fetchingMovie(movieId)(dispatch) : dispatch(removeMovie());
  }, [dispatch, movieId]);

  return (
    <LoaderScreen>
      {response !== null ? (
        <DetailMovie movie={response} />
      ) : (
        <SearchPanelMovie />
      )}
      {isFetching && <Loader isWithBlockingWindow />}
      {error !== null && <div>{error}</div>}
    </LoaderScreen>
  );
}
