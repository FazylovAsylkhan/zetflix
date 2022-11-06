import React from 'react';
import { joinClasses } from '../../../helpers';
import classes from './Button.module.scss';
import {
  BUTTON_TYPE_SUBMIT,
  BUTTON_TYPE_RESET,
  BUTTON_TYPE_BUTTON,
  CLASSNAME_PRIMARY,
  CLASSNAME_LIGHT,
} from './consts';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?:
    | typeof BUTTON_TYPE_SUBMIT
    | typeof BUTTON_TYPE_RESET
    | typeof BUTTON_TYPE_BUTTON;
  stylesType?: typeof CLASSNAME_PRIMARY | typeof CLASSNAME_LIGHT;
  parentClasses?: string;
}

const defaultProps = {
  parentClasses: '',
  stylesType: CLASSNAME_PRIMARY,
  type: BUTTON_TYPE_BUTTON,
};

function Button({
  children,
  onClick,
  parentClasses,
  type = BUTTON_TYPE_BUTTON,
  stylesType = CLASSNAME_PRIMARY,
}: ButtonProps): JSX.Element {
  const { primary, light } = classes;

  const styles = {
    primary: joinClasses(parentClasses, primary),
    light: joinClasses(parentClasses, light),
  };

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={styles[stylesType]} onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = defaultProps;

export default Button;
