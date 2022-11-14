import React from 'react';
import classes from './Option.module.scss';

interface OptionProps {
  value: string;
  handlerClick: () => void;
}

function Option({ value, handlerClick }: OptionProps): JSX.Element {
  const { option, wrapper } = classes;

  return (
    <li className={wrapper}>
      <button className={option} type="button" onClick={() => handlerClick()}>
        {value}
      </button>
    </li>
  );
}

export default Option;
