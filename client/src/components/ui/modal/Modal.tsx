import React from 'react';
import { joinClasses } from '@helpers/joinClasses';
import classes from './Modal.module.scss';

interface ModalProps extends React.HTMLAttributes<HTMLElement> {
  parentClasses?: string;
}

export function Modal({
  children,
  parentClasses,
}: ModalProps): JSX.Element | null {
  const { modal } = classes;

  return (
    <div>
      <div className={joinClasses(parentClasses, modal)}>{children}</div>
    </div>
  );
}
