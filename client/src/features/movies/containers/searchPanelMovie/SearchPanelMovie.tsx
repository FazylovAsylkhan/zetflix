import React from 'react';
import { SearchFormMovie } from './containers';
import { SearchPanel } from './components';
import { HeaderMovie } from '../shared/headerMovie';

export function SearchPanelMovie(): JSX.Element {
  return (
    <SearchPanel>
      <HeaderMovie />
      <SearchFormMovie />
    </SearchPanel>
  );
}
