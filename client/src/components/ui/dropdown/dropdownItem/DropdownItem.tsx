import React from 'react';
import type { IDropdownItem } from '../models';
import classes from './DropdownItem.module.scss';

interface DropdownItemProps {
  item: IDropdownItem;
  handlerClick: () => void;
}

export function DropdownItem({
  item,
  handlerClick,
}: DropdownItemProps): JSX.Element {
  const { checkedOption, notCheckedOption } = classes;
  const { isChecked, value } = item;

  const stateStyles = isChecked ? checkedOption : notCheckedOption;

  return (
    <li>
      <button
        className={stateStyles}
        type="button"
        onClick={() => handlerClick()}>
        {value}
      </button>
    </li>
  );
}

export default DropdownItem;
