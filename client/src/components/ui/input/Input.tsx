import React from 'react';
import classes from './Input.module.scss';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  id?: string;
}

function Input({
  onChange,
  value,
  placeholder,
  id = String(new Date().getDate()),
}: InputProps): JSX.Element {
  const { search } = classes;

  return (
    <input
      id={id}
      className={search}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}

export default Input;
