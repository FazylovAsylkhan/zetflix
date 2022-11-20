import React from 'react';
import { Header } from '../shared';
import { SearchForm } from './searchForm';
import generalClasses from '@scss/style.module.scss';
import classes from './SearchPanel.module.scss';

export function SearchPanel(): JSX.Element {
  const { container, wrapper } = generalClasses;
  const { searchPanel, background, header } = classes;

  return (
    <div className={searchPanel}>
      <div className={background} />
      <div className={container}>
        <div className={wrapper}>
          <Header parentClasses={header} />
          <SearchForm />
        </div>
      </div>
    </div>
  );
}
