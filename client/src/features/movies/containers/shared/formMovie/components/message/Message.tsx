import React from 'react';
import classes from './Message.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Message({ children }: any): JSX.Element {
  const { red } = classes;
  return <div className={red}>{children}</div>;
}
