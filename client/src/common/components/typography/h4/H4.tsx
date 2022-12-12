import React from 'react';
import { joinClasses } from '@common/helpers';
import classes from './H4.module.scss';

const CLASSNAME_PRIMARY = 'primary';
const CLASSNAME_RED = 'red';
const CLASSNAME_CIRCLE = 'circle';
const CLASSNAME_RECTANGLE = 'rectangle';

interface H4Props extends React.HTMLAttributes<HTMLHeadingElement> {
  stylesType?:
    | typeof CLASSNAME_PRIMARY
    | typeof CLASSNAME_RED
    | typeof CLASSNAME_CIRCLE
    | typeof CLASSNAME_RECTANGLE;
  parentClasses?: string;
}

export function H4({
  children,
  parentClasses = '',
  stylesType = CLASSNAME_PRIMARY,
}: H4Props): JSX.Element {
  const { primary, red, circle, rectangle } = classes;
  const styles = {
    primary: joinClasses(parentClasses, primary),
    red: joinClasses(parentClasses, red),
    circle: joinClasses(parentClasses, circle),
    rectangle: joinClasses(parentClasses, rectangle),
  };

  return <h4 className={styles[stylesType]}>{children}</h4>;
}
