import React, { useState } from 'react';
import DropdownItem from './dropdownItem';
import type { IDropdownItem } from './models';
import { joinClasses } from '../../../helpers';
import classes from './Dropdown.module.scss';

interface DropdownProps {
  initialItems: IDropdownItem[];
  parantClasses?: string;
  defaultValue: string;
}
export function Dropdown({
  initialItems,
  defaultValue,
  parantClasses = '',
}: DropdownProps): JSX.Element {
  const { openedSelector, closedSelector, dropdown, list } = classes;
  const [isOpened, setIsOpened] = useState(false);
  const [items, setItems] = useState(initialItems);
  const stateStyles = isOpened ? openedSelector : closedSelector;

  const handleClick = (): void => {
    setIsOpened(!isOpened);
  };

  const handlerClick = (index: number): void => {
    const updatedItems = items.map((item, i) => {
      const { value, isChecked } = item;
      const updatedItem = {
        value,
        isChecked: !isChecked,
      };

      return index === i ? updatedItem : item;
    });

    setItems(updatedItems);
  };

  return (
    <div className={joinClasses(parantClasses, dropdown)}>
      <button
        type="button"
        className={stateStyles}
        onClick={() => handleClick()}>
        {defaultValue}
      </button>
      {isOpened && (
        <ul className={list}>
          {items.map((item, i) => (
            <DropdownItem
              key={item.value}
              item={item}
              handlerClick={() => handlerClick(i)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
