import React from 'react';
import { joinClasses } from '@common/helpers';
import classes from './Input.module.scss';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  id?: string;
  parentClasses?: string;
  value: string;
  name: string;
}

export function Input({
  placeholder,
  value,
  parentClasses,
  id,
  name,
  onChange,
  onBlur,
}: InputProps): JSX.Element {
  const { input } = classes;

  return (
    <input
      id={id}
      className={joinClasses(parentClasses, input)}
      onChange={onChange}
      value={value}
      name={name}
      placeholder={placeholder}
      onBlur={onBlur}
    />
  );
}
