import React from 'react';
import { joinClasses } from '@helpers/joinClasses';
import classes from './H3.module.scss';

const CLASSNAME_PRIMARY = 'primary';

interface H3Props extends React.HTMLAttributes<HTMLHeadingElement> {
  stylesType?: typeof CLASSNAME_PRIMARY;
  parentClasses?: string;
}

export function H3({
  children,
  parentClasses = '',
  stylesType = CLASSNAME_PRIMARY,
}: H3Props): JSX.Element {
  const { primary } = classes;
  const styles = {
    primary: joinClasses(parentClasses, primary),
  };

  return <h3 className={styles[stylesType]}>{children}</h3>;
}

export default H3;
