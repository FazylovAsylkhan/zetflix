import React, { useState } from 'react';
import MenuItem, { IMenuItem } from './menuItem';
import classes from './Menu.module.scss';

interface MenuProps {
  menuItems: IMenuItem[];
}

function Menu({ menuItems }: MenuProps): JSX.Element {
  const { menu } = classes;
  const [items, setItems] = useState(menuItems);

  const handleClick = (index: number): void => {
    const updatedMenuItems = items.map((item, i) => ({
      isActive: i === index,
      value: item.value,
    }));

    setItems(updatedMenuItems);
  };

  return (
    <nav>
      <ul className={menu}>
        {items.map((item, index) => (
          <MenuItem
            key={item.value}
            handlerClick={() => handleClick(index)}
            data={item}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
