import React from 'react';
import { joinClasses } from '../../../helpers';
import classes from './Button.module.scss';

export const TYPE_BUTTON_BUTTON = 'button';
export const TYPE_BUTTON_RESET = 'reset';
export const TYPE_BUTTON_SUBMIT = 'submit';
export const CLASSNAME_PRIMARY = 'primary';
export const CLASSNAME_LIGHT = 'light';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?:
    | typeof TYPE_BUTTON_BUTTON
    | typeof TYPE_BUTTON_RESET
    | typeof TYPE_BUTTON_SUBMIT;
  stylesType?: typeof CLASSNAME_PRIMARY | typeof CLASSNAME_LIGHT;
  parentClasses?: string;
}

export function Button({
  children,
  onClick,
  parentClasses = '',
  type = TYPE_BUTTON_BUTTON,
  stylesType = CLASSNAME_PRIMARY,
}: ButtonProps): JSX.Element {
  const { primary, light } = classes;

  const styles = {
    primary: joinClasses(parentClasses, primary),
    light: joinClasses(parentClasses, light),
  };

  switch (type) {
    case TYPE_BUTTON_BUTTON:
      return (
        <button
          type={TYPE_BUTTON_BUTTON}
          className={styles[stylesType]}
          onClick={onClick}>
          {children}
        </button>
      );
    case TYPE_BUTTON_RESET:
      return (
        <button
          type={TYPE_BUTTON_RESET}
          className={styles[stylesType]}
          onClick={onClick}>
          {children}
        </button>
      );
    case TYPE_BUTTON_SUBMIT:
      return (
        <button
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
