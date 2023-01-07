import React from 'react';
import { joinClasses } from '@common/helpers';
import classes from './Button.module.scss';

export const TYPE_BUTTON_BUTTON = 'button';
export const TYPE_BUTTON_RESET = 'reset';
export const TYPE_BUTTON_SUBMIT = 'submit';
export const CLASSNAME_PRIMARY = 'primary';
export const CLASSNAME_LIGHT = 'light';
export const CLASSNAME_TRANSPARENT = 'transparent';
export const CLASSNAME_SEARCH = 'search';
export const CLASSNAME_DATE = 'date';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?:
    | typeof TYPE_BUTTON_BUTTON
    | typeof TYPE_BUTTON_RESET
    | typeof TYPE_BUTTON_SUBMIT;
  stylesType?:
    | typeof CLASSNAME_PRIMARY
    | typeof CLASSNAME_LIGHT
    | typeof CLASSNAME_TRANSPARENT
    | typeof CLASSNAME_SEARCH
    | typeof CLASSNAME_DATE;
  parentClasses?: string;
}

export function Button({
  children,
  onClick,
  id,
  parentClasses = '',
  type = TYPE_BUTTON_BUTTON,
  stylesType = CLASSNAME_PRIMARY,
}: ButtonProps): JSX.Element {
  const { primary, light, transparent, search, date } = classes;

  const styles = {
    primary: joinClasses(parentClasses, primary),
    light: joinClasses(parentClasses, light),
    transparent: joinClasses(parentClasses, transparent),
    search: joinClasses(parentClasses, search),
    date: joinClasses(parentClasses, date),
  };

  switch (type) {
    case TYPE_BUTTON_BUTTON:
      return (
        <button
          id={id}
          type={TYPE_BUTTON_BUTTON}
          className={styles[stylesType]}
          onClick={onClick}>
          {children}
        </button>
      );
    case TYPE_BUTTON_RESET:
      return (
        <button
          id={id}
          type={TYPE_BUTTON_RESET}
          className={styles[stylesType]}
          onClick={onClick}>
          {children}
        </button>
      );
    case TYPE_BUTTON_SUBMIT:
      return (
        <button
          id={id}
          type={TYPE_BUTTON_SUBMIT}
          className={styles[stylesType]}
          onClick={onClick}>
          {children}
        </button>
      );
    default:
      throw new Error('Type button not found');
  }
}
