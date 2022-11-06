import React from 'react';
import { CLASSNAME_H2, CLASSNAME_H3, CLASSNAME_H4 } from './consts';
import { joinClasses } from '../../../helpers';
import classes from './Heading.module.scss';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  parentClasses?: string;
  stylesType: typeof CLASSNAME_H2 | typeof CLASSNAME_H3 | typeof CLASSNAME_H4;
}

function Heading({
  children,
  stylesType,
  parentClasses = '',
}: HeadingProps): JSX.Element {
  const { h2, h3, h4 } = classes;

  switch (stylesType) {
    case CLASSNAME_H2:
      return <h2 className={joinClasses(parentClasses, h2)}>{children}</h2>;
    case CLASSNAME_H3:
      return <h3 className={joinClasses(parentClasses, h3)}>{children}</h3>;
    case CLASSNAME_H4:
      return <h4 className={joinClasses(parentClasses, h4)}>{children}</h4>;
    default:
      throw new Error();
  }
}

Heading.defaultProps = {
  parentClasses: '',
};

export default Heading;
