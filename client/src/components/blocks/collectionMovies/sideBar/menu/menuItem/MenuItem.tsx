import React from 'react';
import { joinClasses } from '../../../../../../helpers';
import { IMenuItem } from './models';
import classes from './MenuItem.module.scss';

interface MenuItemProps {
  data: IMenuItem;
  handlerClick: () => void;
}

function MenuItem({ data, handlerClick }: MenuItemProps): JSX.Element {
  const { menuItem, active } = classes;
  const { isActive, value } = data;
  const itemClassName = isActive ? joinClasses(menuItem, active) : menuItem;

  return (
    <li>
      <button
        className={itemClassName}
        type="button"
        onClick={() => handlerClick()}>
        {value}
      </button>
    </li>
  );
}

export default MenuItem;
