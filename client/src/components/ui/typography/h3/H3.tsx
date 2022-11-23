import React from 'react';
import { joinClasses } from '@helpers/joinClasses';
import classes from './H3.module.scss';

const CLASSNAME_PRIMARY = 'primary';
const CLASSNAME_SMALL = 'small';

interface H3Props extends React.HTMLAttributes<HTMLHeadingElement> {
  stylesType?: typeof CLASSNAME_PRIMARY | typeof CLASSNAME_SMALL;
  parentClasses?: string;
}

export function H3({
  children,
  parentClasses = '',
  stylesType = CLASSNAME_PRIMARY,
  onClick,
}: H3Props): JSX.Element {
  const { primary, small } = classes;
  const styles = {
    primary: joinClasses(parentClasses, primary),
    small: joinClasses(parentClasses, small),
  };

  return (
    <h3 onClick={onClick} className={styles[stylesType]}>
      {children}
    </h3>
  );
}

export default H3;
