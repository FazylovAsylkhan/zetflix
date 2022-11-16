import React from 'react';
import classes from './HorizontalRule.module.scss';

export function HorizontalRule(): JSX.Element {
  const { hr } = classes;

  return <hr className={hr} />;
}
