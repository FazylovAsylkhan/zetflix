import React from 'react';
import classes from './RadioDropdownItem.module.scss';

interface RadioDropdownItemProps {
  value: string;
  handlerClick: () => void;
}

function RadioDropdownItem({
  value,
  handlerClick,
}: RadioDropdownItemProps): JSX.Element {
  const { dropdownItem, dropdownItemWrapper } = classes;

  return (
    <li className={dropdownItemWrapper}>
      <button
        className={dropdownItem}
        type="button"
        onClick={() => handlerClick()}>
        {value}
      </button>
    </li>
  );
}

export default RadioDropdownItem;
