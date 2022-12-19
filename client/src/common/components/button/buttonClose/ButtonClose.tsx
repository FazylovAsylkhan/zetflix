import React from 'react';
import { joinClasses } from '@common/helpers';
import classes from './ButtonClose.module.scss';

interface ButtonCloseProps {
  parentClasses?: string;
  onClick: () => void;
}

export function ButtonClose({
  parentClasses,
  onClick,
}: ButtonCloseProps): JSX.Element {
  const { close } = classes;

  return (
    <button
      type="button"
      className={joinClasses(parentClasses, close)}
      onClick={onClick}
    />
  );
}
