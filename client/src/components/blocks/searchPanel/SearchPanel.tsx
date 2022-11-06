import React from 'react';
import Header from '../shared/header';
import SearchForm from './searchForm';
import generalClasses from '../../../scss/style.module.scss';
import classes from './SearchPanel.module.scss';

function SearchPanel(): JSX.Element {
  const { container, wrapper } = generalClasses;
  const { searchPanel, background } = classes;

  return (
    <div className={searchPanel}>
      <div className={background} />
      <div className={container}>
        <div className={wrapper}>
          <Header />
          <SearchForm />
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;
