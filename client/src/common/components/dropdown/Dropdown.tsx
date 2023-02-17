import React, { useRef, useState } from 'react';
import { joinClasses } from '@common/helpers';
import { useCatchingEventOutsideElement } from '@common/hooks';
import { Option } from './option';
import classes from './Dropdown.module.scss';

interface DropdownProps {
  value: string[];
  options: string[];
  parentClasses?: string;
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Dropdown(props: DropdownProps): JSX.Element {
  const { name, onChange, options, value, label, parentClasses = '' } = props;
  const { openedSelector, closedSelector, dropdown, select } = classes;
  const [isOpened, setIsOpened] = useState(false);
  const stateStyles = isOpened ? openedSelector : closedSelector;
  const handleClick = (): void => {
    setIsOpened(!isOpened);
  };

  const refDropdown = useRef(null);
  useCatchingEventOutsideElement('mousedown', refDropdown, () =>
    setIsOpened(false)
  );

  return (
    <div ref={refDropdown} className={joinClasses(parentClasses, dropdown)}>
      <button
        type="button"
        id={name}
        className={stateStyles}
        onClick={() => handleClick()}>
        {label}
      </button>
      {isOpened && (
        <select
          name={name}
          className={select}
          multiple
          value={value}
          onChange={onChange}>
          {options.map((option) => (
            <Option key={option} option={option} />
          ))}
        </select>
      )}
    </div>
  );
}
