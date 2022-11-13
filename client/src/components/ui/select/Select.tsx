import React, { useRef, useState } from 'react';
import { Option } from './option';
import { joinClasses } from '../../../helpers';
import { useCatchingOutsideElement } from '../../../hooks';
import classes from './Select.module.scss';

interface SelectProps {
  arrOptions: string[];
  parentClasses?: string;
  label: string;
  value: string;
  handlerClick: (valueSelectedOption: string) => void;
}

export function Select({
  arrOptions,
  label,
  value,
  parentClasses = '',
  handlerClick,
}: SelectProps): JSX.Element {
  const { selectForm, options, openedSelector, closedSelector, labelTitle } =
    classes;
  const [isOpen, setIsOpen] = useState(false);
  const stateClassName = isOpen ? openedSelector : closedSelector;

  const handleClick = (valueSelectedOption: string): void => {
    handlerClick(valueSelectedOption);
    setIsOpen(false);
  };

  const refSelectElement = useRef(null);
  useCatchingOutsideElement('mousedown', refSelectElement, () =>
    setIsOpen(false)
  );

  return (
    <div
      ref={refSelectElement}
      className={joinClasses(parentClasses, selectForm)}>
      <label className={labelTitle} htmlFor={value}>
        {label}
      </label>
      <button
        id={value}
        type="button"
        className={stateClassName}
        onClick={() => setIsOpen(!isOpen)}>
        {value}
      </button>

      {isOpen && (
        <ul className={options}>
          {arrOptions.map((option) => (
            <Option
              key={option}
              value={option}
              handlerClick={() => handleClick(option)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
