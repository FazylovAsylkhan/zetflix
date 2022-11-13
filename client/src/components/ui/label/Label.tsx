import React from 'react';
import { joinClasses } from '../../../helpers';
import classes from './Label.module.scss';

interface LabelProps {
  id: string;
  title: string;
  children: React.ReactNode;
  parentClasses?: string;
}

export function Label({
  id,
  title,
  children,
  parentClasses = '',
}: LabelProps): JSX.Element {
  const { label } = classes;
  return (
    <label htmlFor={id} className={joinClasses(label, parentClasses)}>
      <span>{title}</span>
      {children}
    </label>
  );
}
