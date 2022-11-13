import React from 'react';
import { joinClasses } from '../../../helpers';
import classes from './Button.module.scss';

export const CLASSNAME_PRIMARY = 'primary';
export const CLASSNAME_LIGHT = 'light';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button';
  stylesType?: typeof CLASSNAME_PRIMARY | typeof CLASSNAME_LIGHT;
  parentClasses?: string;
}

export function Button({
  children,
  onClick,
  parentClasses = '',
  type = 'button',
  stylesType = CLASSNAME_PRIMARY,
}: ButtonProps): JSX.Element {
  const { primary, light } = classes;

  const styles = {
    primary: joinClasses(parentClasses, primary),
    light: joinClasses(parentClasses, light),
  };

  switch (type) {
    case 'button':
      return (
        <button type="button" className={styles[stylesType]} onClick={onClick}>
          {children}
        </button>
      );
    case 'reset':
      return (
        <button type="reset" className={styles[stylesType]} onClick={onClick}>
          {children}
        </button>
      );
    case 'submit':
      return (
        <button type="submit" className={styles[stylesType]} onClick={onClick}>
          {children}
        </button>
      );
    default:
      throw new Error('Type not found');
  }
}
