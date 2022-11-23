import React, { useRef, useState } from 'react';
import { useCatchingEventOutsideElement } from '@hooks/useCatchingEventOutsideElement';
import { joinClasses } from '@helpers/joinClasses';
import { ISelect } from './models';
import { Option } from './option';
import classes from './Select.module.scss';

interface SelectProps {
  data: ISelect;
  parentClasses?: string;
  value: string;
  onClick: (valueSelectedOption: string) => void;
}

export function Select({
  data,
  value,
  parentClasses = '',
  onClick,
}: SelectProps): JSX.Element {
  const { selectForm, options, openedSelector, closedSelector, labelTitle } =
    classes;
  const { labelText, listOptions } = data;
  const [isShownListOptions, setIsShownListOptions] = useState(false);
  const stateClassName = isShownListOptions ? openedSelector : closedSelector;

  const handleClick = (valueSelectedOption: string): void => {
    onClick(valueSelectedOption);
    setIsShownListOptions(false);
  };

  const refSelectElement = useRef(null);
  useCatchingEventOutsideElement('mousedown', refSelectElement, () =>
    setIsShownListOptions(false)
  );

  return (
    <div
      ref={refSelectElement}
      className={joinClasses(parentClasses, selectForm)}>
      <label className={labelTitle} htmlFor={value}>
        {labelText}
      </label>
      <button
        id={value}
        type="button"
        className={stateClassName}
        onClick={() => setIsShownListOptions(!isShownListOptions)}>
        {value}
      </button>

      {isShownListOptions && (
        <ul className={options}>
          {listOptions.map((option) => (
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
