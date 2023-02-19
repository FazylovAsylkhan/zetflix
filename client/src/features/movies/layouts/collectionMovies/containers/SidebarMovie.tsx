import React, { useState } from 'react';
import { Sidebar } from '../components';
import { dataSidebarMovie } from '../constants';
import { getGenreParam, getSortingParam, toggleMenuItem } from '../helpers';
import { Menu, Select } from '@common/components';
import { NamesParams } from '../../shared';

interface SidebarMovieProps {
  stateSearchParams: {
    searchParams: URLSearchParams;
    updateParams: () => void;
  };
}

export function SidebarMovie(props: SidebarMovieProps): JSX.Element {
  const { stateSearchParams } = props;
  const { searchParams, updateParams } = stateSearchParams;

  const genreValue = searchParams.get(NamesParams.GENRE);
  const sortByValue = searchParams.get(NamesParams.SORT_BY);

  const initialSortBy = sortByValue !== null ? sortByValue : 'release date';
  const initialGenres =
    genreValue !== null
      ? toggleMenuItem(dataSidebarMovie.menuGenres, genreValue)
      : toggleMenuItem(dataSidebarMovie.menuGenres, 'all');

  const [sorting, setSorting] = useState(initialSortBy);
  const [genres, setGenres] = useState(initialGenres);

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
    const updatedMenuGenres = toggleMenuItem(genres, selectedGenre);
    setGenres(updatedMenuGenres);

    const param = getGenreParam(selectedGenre);
    param !== ''
      ? searchParams.set(NamesParams.GENRE, param)
      : searchParams.delete(NamesParams.GENRE);

    searchParams.delete(NamesParams.MOVIE_ID);
    updateParams();
  };

  return (
    <Sidebar>
      <Menu menuItems={genres} onClickMenuItem={handleSelectionOfGenre} />
      <Select
        data={dataSidebarMovie.select}
        value={sorting}
        onClick={handleSelectionOfSorting}
      />
    </Sidebar>
  );
}
