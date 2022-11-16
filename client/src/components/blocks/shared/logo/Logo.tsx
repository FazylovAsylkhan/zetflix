import React from 'react';
import classes from './Logo.module.scss';

export function Logo(): JSX.Element {
  return (
    <div className={classes.logo}>
      zetflix<span>free</span>
    </div>
  );
}
