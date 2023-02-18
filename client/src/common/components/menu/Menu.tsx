import React from 'react';
import { MenuItem, IMenuItem } from './menuItem';
import classes from './Menu.module.scss';

interface MenuProps {
  menuItems: IMenuItem[];
  onClickMenuItem: (value: string) => void;
}

export function Menu(props: MenuProps): JSX.Element {
  const { menuItems, onClickMenuItem } = props;
  const { menu } = classes;

  return (
    <nav>
      <ul className={menu}>
        {menuItems.map((menuItem) => (
          <MenuItem
            key={menuItem.value}
            handlerClick={() => onClickMenuItem(menuItem.value)}
            data={menuItem}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
