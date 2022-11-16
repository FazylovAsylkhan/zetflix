import React from 'react';
import { joinClasses } from 'helpers';
import classes from './H4.module.scss';

const CLASSNAME_PRIMARY = 'primary';

interface H4Props extends React.HTMLAttributes<HTMLHeadingElement> {
  stylesType?: typeof CLASSNAME_PRIMARY;
  parentClasses?: string;
}

export function H4({
  children,
  parentClasses = '',
  stylesType = CLASSNAME_PRIMARY,
}: H4Props): JSX.Element {
  const { primary } = classes;
  const styles = {
    primary: joinClasses(parentClasses, primary),
  };

  return <h4 className={styles[stylesType]}>{children}</h4>;
}
