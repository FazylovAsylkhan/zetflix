import React, { useContext, useEffect } from 'react';
import { SidebarMovie, CardsMovie } from '@features/movies/containers';
import { Collection, TotalCount } from './components';
import {
  loadMovies,
  selectMovies,
  selectUrlParams,
} from '@features/movies/services/store';
import { Loader } from '@common/components';
import { MovieContext } from '@features/movies/context';
import { SelectOptions } from '@features/movies/containers/sidebarMovie';
import { useAppDispatch, useAppSelector } from '@common/hooks';
import { getNormalizedParams } from '@common/helpers';
import { filter, sortBy } from '@features/movies/services/store/actions';

export function CollectionMovies(): JSX.Element {
  const MovieCtx = useContext(MovieContext);
  const dispatch = useAppDispatch();
  const urlParams = useAppSelector(selectUrlParams);
  const { data, isFetching, error } = useAppSelector(selectMovies);
  const { movies, totalAmount } = data;
  const cardsMovie = movies.map((movie) => ({
    ...movie,
    stateTooltip: {
      isShownTooltip: false,
      isShownListOptions: false,
    },
  }));

  useEffect(() => {
    const normalizedUrl = getNormalizedParams(
      urlParams.sortBy,
      urlParams.sortOrder,
      urlParams.search,
      urlParams.searchBy,
      urlParams.filter,
      urlParams.limit
    );

    loadMovies(normalizedUrl)(dispatch);
  }, [urlParams, dispatch]);

  const handleChangeSorting = (selectedSorting: string): void => {
    MovieCtx?.stateMovie.setSelectedMovie(undefined);
    const SORTING_VOTE_AVERAGE = 'vote_average';

    switch (selectedSorting) {
      case SelectOptions.POPULARITY:
        dispatch(sortBy(SORTING_VOTE_AVERAGE));
        break;
      case SelectOptions.VOTE_COUNT:
      case SelectOptions.BUDGET:
        dispatch(sortBy(selectedSorting));
        break;
      default:
        dispatch(sortBy(SelectOptions.RELEASE_DATE));
    }
  };

  const handleChangeGenre = (selectedGenre: string): void => {
    MovieCtx?.stateMovie.setSelectedMovie(undefined);

    dispatch(filter(selectedGenre));
  };

  return (
    <>
      {error !== null && <div>{error}</div>}
      {isFetching && <Loader isWithBlockingWindow={true} />}
      {movies.length !== 0 && (
        <Collection>
          <SidebarMovie
            onChangeSorting={handleChangeSorting}
            onChangeGenre={handleChangeGenre}
          />
          <TotalCount value={totalAmount} />
          <CardsMovie cardsMovie={cardsMovie} />
        </Collection>
      )}
    </>
  );
}
