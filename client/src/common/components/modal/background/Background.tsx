import React from 'react';
import classes from './Background.module.scss';

export function Background(): JSX.Element {
  const { background } = classes;

  return <div className={background} />;
}
