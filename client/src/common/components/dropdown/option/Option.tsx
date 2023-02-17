import React from 'react';
import classes from './Option.module.scss';

interface OptionProps {
  option: string;
}

export function Option({ option }: OptionProps): JSX.Element {
  return (
    <option className={classes.option} value={option}>
      {option}
    </option>
  );
}
