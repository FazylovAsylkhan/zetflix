import React from 'react';
import { joinClasses } from '../../../helpers';
import classes from './Input.module.scss';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  id?: string;
  parentClasses?: string;
  value: string;
}

export function Input({
  placeholder,
  value,
  parentClasses,
  id,
  onChange,
}: InputProps): JSX.Element {
  const { input } = classes;

  return (
    <input
      id={id}
      className={joinClasses(parentClasses, input)}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}
