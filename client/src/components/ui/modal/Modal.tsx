import React from 'react';
import { joinClasses } from 'helpers';
import classes from './Modal.module.scss';

interface ModalProps extends React.HTMLAttributes<HTMLElement> {
  parentClasses?: string;
}

export function Modal({
  children,
  parentClasses,
  onMouseOver,
}: ModalProps): JSX.Element | null {
  const { modal } = classes;

  return (
    <div onMouseOver={onMouseOver}>
      <div className={joinClasses(parentClasses, modal)}>{children}</div>
    </div>
  );
}
