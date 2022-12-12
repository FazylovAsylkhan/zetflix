import { getNormalizedParams } from '@common/helpers';
import { IMovie } from '@features/movies/api';
import React, { createContext, useEffect, useState } from 'react';
import {
  INITIAL_VALUE_SORTING,
  LIMITED_ITEMS,
  SEARCH_BY_TITLE,
  SORT_ORDER_DESC,
} from './constants';
import { IMovieContext } from './models';

export const MovieContext = createContext<IMovieContext | null>(null);

interface MovieContextProviderProps {
  children: React.ReactNode;
}

export function MovieContextProvider({
  children,
}: MovieContextProviderProps): JSX.Element {
  const initialUrlParams = getNormalizedParams(
    INITIAL_VALUE_SORTING,
    SORT_ORDER_DESC,
    LIMITED_ITEMS
  );

  const [selectedMovie, setSelectedMovie] = useState<IMovie | undefined>(
    undefined
  );
  const [genreParams, setGenreParams] = useState('');
  const [sortingParams, setSortingParams] = useState(INITIAL_VALUE_SORTING);
  const [searchParams, setSearchParams] = useState('');
  const [currentUrlParams, setCurrentUrlParams] = useState(initialUrlParams);

  useEffect(() => {
    const searchByTitleParams = `${searchParams}&${SEARCH_BY_TITLE}`;
    const urlParams = getNormalizedParams(
      sortingParams,
      SORT_ORDER_DESC,
      searchByTitleParams,
      genreParams,
      LIMITED_ITEMS
    );

    setCurrentUrlParams(urlParams);
  }, [sortingParams, genreParams, searchParams]);

  const value = {
    stateMovie: {
      selectedMovie,
      setSelectedMovie,
    },
    stateGenreParams: {
      genreParams,
      setGenreParams,
    },
    stateSortingParams: {
      sortingParams,
      setSortingParams,
    },
    stateSearchParams: {
      searchParams,
      setSearchParams,
    },
    stateCurrentUrl: {
      currentUrlParams,
      setCurrentUrlParams,
    },
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}
