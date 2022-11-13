import React from 'react';
import { joinClasses } from '../../../../helpers';
import classes from './H2.module.scss';

const CLASSNAME_PRIMARY = 'primary';

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  stylesType?: typeof CLASSNAME_PRIMARY;
  parentClasses?: string;
}

export function H2({
  children,
  parentClasses = '',
  stylesType = CLASSNAME_PRIMARY,
}: H2Props): JSX.Element {
  const { primary } = classes;
  const styles = {
    primary: joinClasses(parentClasses, primary),
  };

  return <h2 className={styles[stylesType]}>{children}</h2>;
}
