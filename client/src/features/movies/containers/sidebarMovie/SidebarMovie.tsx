import React, { useState } from 'react';
import { Menu, Select } from '@common/components';
import { dataSidebarMovie } from './constants';
import { Sidebar } from './components';

interface SidebarMovieProps {
  onChangeSorting: (valueSelectedSorting: string) => void;
  onChangeGenre: (valueSelectedGenre: string) => void;
}

export function SidebarMovie(props: SidebarMovieProps): JSX.Element {
  const { onChangeSorting, onChangeGenre } = props;
  const { menuGenres, select } = dataSidebarMovie;

  const [valueOption, setValueOption] = useState('release date');
  const [genres, setGenres] = useState(menuGenres);

  const handleClickSorting = (valueSelectedOption: string): void => {
    setValueOption(valueSelectedOption);
    onChangeSorting(valueSelectedOption);
  };

  const handleClickMenuGenres = (index: number): void => {
    const updatedMenuGenres = genres.map((genre, i) => {
      const isSelectedGenre = index === i;

      if (isSelectedGenre) {
        const isAllGenres = genre.value === 'all';
        const selectedGenre = isAllGenres ? '' : genre.value;
        onChangeGenre(selectedGenre);

        return {
          isActive: isSelectedGenre,
          value: genre.value,
        };
      }
      return {
        ...genre,
        isActive: isSelectedGenre,
      };
    });
    setGenres(updatedMenuGenres);
  };

  return (
    <Sidebar>
      <Menu menuItems={genres} onClickMenuItem={handleClickMenuGenres} />
      <Select data={select} value={valueOption} onClick={handleClickSorting} />
    </Sidebar>
  );
}
