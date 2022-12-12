import React from 'react';
import classes from './Fields.module.scss';

interface FormFieldsProps {
  children: React.ReactNode;
}

export function Fields({ children }: FormFieldsProps): JSX.Element {
  const { wrapper } = classes;

  return <div className={wrapper}>{children}</div>;
}
