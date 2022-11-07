import React, { useState } from 'react';
import Option from './option';
import { joinClasses } from '../../../helpers';
import classes from './Select.module.scss';

interface SelectProps {
  arrOptions: string[];
  parentClasses?: string;
}

function Select({ arrOptions, parentClasses = '' }: SelectProps): JSX.Element {
  const { selectForm, options, openedSelector, closedSelector } = classes;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(arrOptions[0]);
  const stateClassName = isOpen ? openedSelector : closedSelector;

  const handleClick = (option: string): void => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={joinClasses(parentClasses, selectForm)}>
      <button
        type="button"
        className={stateClassName}
        onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
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

export default Select;
