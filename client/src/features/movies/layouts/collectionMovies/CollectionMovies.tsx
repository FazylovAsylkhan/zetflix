import React, { useEffect, useState } from 'react';
import { SidebarMovie, CardsMovie } from '@features/movies/containers';
import { Collection, TotalCount } from './components';
import {
  filter,
  sortBy,
  selectAllMovies,
  selectParams,
  resetMovieId,
  fetchingMovies,
} from '@features/movies/services/store';
import { Loader } from '@common/components';
import { SelectOptions } from '@features/movies/containers/sidebarMovie';
import { useAppDispatch, useAppSelector } from '@common/hooks';
import { getNormalizedParams } from '@common/helpers';
import { ICardMovie } from '@features/movies/containers/cardsMovie';

export function CollectionMovies(): JSX.Element {
  const dispatch = useAppDispatch();
  const params = useAppSelector(selectParams);
  const { response, isFetching, error } = useAppSelector(selectAllMovies);

  const [cardsMovies, setCardsMovies] = useState<ICardMovie[]>([]);

  useEffect(() => {
    if (response !== null) {
      const handledMovie = response.data.map((movie) => ({
        ...movie,
        stateTooltip: {
          isShownTooltip: false,
          isShownListOptions: false,
        },
      }));
      setCardsMovies(handledMovie);
    }
  }, [response]);

  useEffect(() => {
    const normalizedUrl = getNormalizedParams(
      params.sortBy,
      params.sortOrder,
      params.search,
      params.searchBy,
      params.filter,
      params.limit
    );

    fetchingMovies(normalizedUrl)(dispatch);
  }, [params, dispatch]);

  const handleChangeSorting = (selectedSorting: string): void => {
    dispatch(resetMovieId());
    const SORTING_VOTE_AVERAGE = 'vote_average';
    const SORTING_RELEASE_DATE = 'release_date';
    const SORTING_VOTE_COUNT = 'vote_count';

    switch (selectedSorting) {
      case SelectOptions.POPULARITY:
        dispatch(sortBy(SORTING_VOTE_AVERAGE));
        break;
      case SelectOptions.VOTE_COUNT:
        dispatch(sortBy(SORTING_VOTE_COUNT));
        break;
      case SelectOptions.BUDGET:
        dispatch(sortBy(selectedSorting));
        break;
      default:
        dispatch(sortBy(SORTING_RELEASE_DATE));
    }
  };

  const handleChangeGenre = (selectedGenre: string): void => {
    dispatch(resetMovieId());

    dispatch(filter(selectedGenre));
  };

  return (
    <>
      {error !== null && <div>{error}</div>}
      {isFetching && <Loader isWithBlockingWindow={true} />}
      {response !== null && (
        <Collection>
          <SidebarMovie
            onChangeSorting={handleChangeSorting}
            onChangeGenre={handleChangeGenre}
          />
          <TotalCount value={response.totalAmount} />
          <CardsMovie cardsMovies={cardsMovies} />
        </Collection>
      )}
    </>
  );
}
