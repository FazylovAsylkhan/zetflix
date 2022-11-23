import React from 'react';
import { joinClasses } from '@helpers/joinClasses';
import classes from './Loader.module.scss';
import { BlockingElement } from '../utils';

interface LoaderProps {
  parentClasses?: string;
  isWithBlockingWindow?: boolean;
}

export function Loader({
  parentClasses,
  isWithBlockingWindow = false,
}: LoaderProps): JSX.Element {
  const { loader, wrapper, title, dot1, dot2, dot3, spinner } = classes;

  return (
    <div className={joinClasses(parentClasses, loader)}>
      {isWithBlockingWindow && <BlockingElement />}
      <div className={wrapper}>
        <h3 className={title}>
          Loading <span className={dot1}>.</span>
          <span className={dot2}>.</span>
          <span className={dot3}>.</span>
        </h3>
        <div className={spinner} />
      </div>
    </div>
  );
}
