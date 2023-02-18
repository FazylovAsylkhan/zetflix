import React, { useEffect, useState } from 'react';
import { selectCollectionMovies } from '@features/movies/services/redux';
import { Loader, Menu, Select } from '@common/components';
import { useAppSelector } from '@common/hooks';

import { CardMovie } from './containers';
import { Collection, TotalCount, Sidebar, Cards } from './components';
import {
  addStateTooltip,
  getGenreParam,
  getSortingParam,
  addActiveToMenuItem,
} from './helpers';
import { dataSidebarMovie } from './constants';
import { ICardMovie } from './models';
import { NamesParams } from '../shared/constants';
import { getUpdatedCardsOnClickTooltip, getUpdatedCardsOnHover } from './model';

interface CollectionMoviesProps {
  searchQuery: string | undefined;
  stateSearchParams: {
    searchParams: URLSearchParams;
    updateParams: () => void;
  };
}

export function CollectionMovies(props: CollectionMoviesProps): JSX.Element {
  const { stateSearchParams } = props;
  const { searchParams, updateParams } = stateSearchParams;

  const { response, isFetching, error } = useAppSelector(
    selectCollectionMovies
  );

  const genreValue = searchParams.get(NamesParams.GENRE);
  const initialGenres =
    genreValue !== null
      ? addActiveToMenuItem(dataSidebarMovie.menuGenres, genreValue)
      : addActiveToMenuItem(dataSidebarMovie.menuGenres, 'all');

  const sortByValue = searchParams.get(NamesParams.SORT_BY);
  const initialSortBy = sortByValue !== null ? sortByValue : 'release date';

  const [cardsMovies, setCardsMovies] = useState<ICardMovie[]>([]);
  const [sorting, setSorting] = useState(initialSortBy);
  const [genres, setGenres] = useState(initialGenres);

  useEffect(() => {
    if (response !== null) {
      const cardsMovie = addStateTooltip(response.data);
      setCardsMovies(cardsMovie);
    }
  }, [response]);

  const handleSelectionOfSorting = (selectedSorting: string): void => {
    setSorting(selectedSorting);

    const param = getSortingParam(selectedSorting);
    param !== ''
      ? searchParams.set(NamesParams.SORT_BY, param)
      : searchParams.delete(NamesParams.SORT_BY);

    searchParams.delete(NamesParams.MOVIE_ID);
    updateParams();
  };

  const handleSelectionOfGenre = (selectedGenre: string): void => {
    const updatedMenuGenres = addActiveToMenuItem(genres, selectedGenre);
    setGenres(updatedMenuGenres);

    const param = getGenreParam(selectedGenre);
    param !== ''
      ? searchParams.set(NamesParams.GENRE, param)
      : searchParams.delete(NamesParams.GENRE);

    searchParams.delete(NamesParams.MOVIE_ID);
    updateParams();
  };

  const handleSelectionOfMovie = (id: number): void => {
    searchParams.set(NamesParams.MOVIE_ID, String(id));
    updateParams();
  };

  const handleHoverCardMovie = (id: number, isShownTooltip: boolean): void => {
    const updatedCards = getUpdatedCardsOnHover(
      cardsMovies,
      id,
      isShownTooltip
    );
    setCardsMovies(updatedCards);
  };

  const handleClickTooltip = (
    id: number,
    isOpenedModalSettings: boolean
  ): void => {
    const updatedCards = getUpdatedCardsOnClickTooltip(
      cardsMovies,
      id,
      isOpenedModalSettings
    );
    setCardsMovies(updatedCards);
  };

  return (
    <>
      {error !== null && <div>{error}</div>}
      {isFetching && <Loader isWithBlockingWindow={true} />}
      {response !== null && (
        <Collection>
          <Sidebar>
            <Menu menuItems={genres} onClickMenuItem={handleSelectionOfGenre} />
            <Select
              data={dataSidebarMovie.select}
              value={sorting}
              onClick={handleSelectionOfSorting}
            />
          </Sidebar>
          <TotalCount value={response.totalAmount} />
          <Cards>
            {cardsMovies.map((cardMovie) => (
              <CardMovie
                key={cardMovie.id}
                onChange={{
                  onHoverCardMovie: handleHoverCardMovie,
                  onClickTooltip: handleClickTooltip,
                  onSelectCardMovie: handleSelectionOfMovie,
                }}
                data={cardMovie}
                stateSearchParams={stateSearchParams}
              />
            ))}
          </Cards>
        </Collection>
      )}
    </>
  );
}
