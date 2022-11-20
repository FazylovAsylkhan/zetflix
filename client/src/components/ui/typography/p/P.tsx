import React from 'react';
import { joinClasses } from '@helpers/joinClasses';
import classes from './P.module.scss';

const CLASSNAME_PRIMARY = 'primary';

interface PProps extends React.HTMLAttributes<HTMLParagraphElement> {
  stylesType?: typeof CLASSNAME_PRIMARY;
  parentClasses?: string;
}

export function P({
  children,
  parentClasses = '',
  stylesType = CLASSNAME_PRIMARY,
}: PProps): JSX.Element {
  const { primary } = classes;
  const styles = {
    primary: joinClasses(parentClasses, primary),
  };

  return <p className={styles[stylesType]}>{children}</p>;
}
