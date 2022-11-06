import React, { useState } from 'react';
import RadioDropdownItem from './radioDropdownItem';
import { joinClasses } from '../../../../../helpers';
import classes from './RadioDropdown.module.scss';

interface DropdownProps {
  radioDropdownItems: string[];
}

function RadioDropdown({
  radioDropdownItems: items,
}: DropdownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(items[0]);
  const { radioDropdown, list, selector, active } = classes;
  const selectorClassName = isOpen ? joinClasses(selector, active) : selector;

  const handleClick = (item: string): void => {
    setCurrentItem(item);
    setIsOpen(false);
  };

  return (
    <div className={radioDropdown}>
      <span>Sort by</span>
      <button
        type="button"
        className={selectorClassName}
        onClick={() => setIsOpen(!isOpen)}>
        {currentItem}
      </button>
      {isOpen && (
        <ul className={list}>
          {items.map((item) => (
            <RadioDropdownItem
              key={item}
              value={item}
              handlerClick={() => handleClick(item)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default RadioDropdown;
