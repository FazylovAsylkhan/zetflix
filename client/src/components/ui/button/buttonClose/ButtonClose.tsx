import React from 'react';
import { joinClasses } from '../../../../helpers';
import classes from './ButtonClose.module.scss';

interface ButtonCloseProps {
  parentClasses?: string;
  handlerClick: () => void;
}

export function ButtonClose({
  parentClasses,
  handlerClick,
}: ButtonCloseProps): JSX.Element {
  const { close } = classes;

  return (
    <button
      type="button"
      className={joinClasses(parentClasses, close)}
      onClick={handlerClick}
    />
  );
}
