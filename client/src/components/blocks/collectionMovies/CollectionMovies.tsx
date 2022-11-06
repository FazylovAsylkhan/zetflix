import React from 'react';
import Cards from './cards';
import SideBar from './sideBar';
import { cards, menuItems, radioDropdownItems } from '../../../assets/data';
import { Heading, CLASSNAME_H4 } from '../../ui';
import generalClasses from '../../../scss/style.module.scss';
import classes from './CollectionMovies.module.scss';

function CollectionMovies(): JSX.Element {
  const { container, wrapper } = generalClasses;
  const { heading } = classes;

  return (
    <div className={container}>
      <div className={wrapper}>
        <SideBar
          initialMenuItems={menuItems}
          initialDropdownItems={radioDropdownItems}
        />
        <Heading stylesType={CLASSNAME_H4} parentClasses={heading}>
          <span>39</span> movies found
        </Heading>
        <Cards arrCards={cards} />
      </div>
    </div>
  );
}

export default CollectionMovies;
