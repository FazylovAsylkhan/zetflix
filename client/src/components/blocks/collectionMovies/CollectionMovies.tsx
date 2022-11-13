import React from 'react';
import { Cards } from './cards';
import { SideBar } from './sideBar';
import { cards, menuItems, selectOptions } from '../../../assets/data';
import { H4 } from '../../ui';
import generalClasses from '../../../scss/style.module.scss';
import classes from './CollectionMovies.module.scss';

export function CollectionMovies(): JSX.Element {
  const { container, wrapper } = generalClasses;
  const { h4 } = classes;

  return (
    <div className={container}>
      <div className={wrapper}>
        <SideBar initialMenuItems={menuItems} selectOptions={selectOptions} />
        <H4 stylesType="primary" parentClasses={h4}>
          <strong>39</strong> movies found
        </H4>
        <Cards arrCards={cards} />
      </div>
    </div>
  );
}
