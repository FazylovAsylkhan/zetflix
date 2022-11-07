import React from 'react';
import Header from '../shared/header';
import SearchForm from './searchForm';
import generalClasses from '../../../scss/style.module.scss';
import classes from './SearchPanel.module.scss';
import { CLASSNAME_H2, Heading } from '../../ui';

const HTML_ID = 'search';

function SearchPanel(): JSX.Element {
  const { container, wrapper } = generalClasses;
  const { searchPanel, background, label, title } = classes;

  return (
    <div className={searchPanel}>
      <div className={background} />
      <div className={container}>
        <div className={wrapper}>
          <Header />
          <label htmlFor={HTML_ID} className={label}>
            <Heading stylesType={CLASSNAME_H2} parentClasses={title}>
              Find your movie
            </Heading>
            <SearchForm id={HTML_ID} />
          </label>
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;
