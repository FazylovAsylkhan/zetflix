import React from 'react';
import { joinClasses } from '@common/helpers';
import classes from './Img.module.scss';

const CLASSNAME_PRIMARY = 'primary';

interface ImgProps {
  stylesType: typeof CLASSNAME_PRIMARY;
  src: string;
  alt: string;
  parentClasses?: string;
}

export function Img(props: ImgProps): JSX.Element {
  const { src, alt, stylesType, parentClasses } = props;
  const { primary } = classes;
  const styles = {
    primary: joinClasses(parentClasses, primary),
  };

  return <img src={src} alt={alt} className={styles[stylesType]}></img>;
}
