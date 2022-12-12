import React from 'react';
import generalClasses from '@common/scss/style.module.scss';
import classes from './Detail.module.scss';

interface DetailProps {
  children: React.ReactNode;
}

export function Detail({ children }: DetailProps): JSX.Element {
  const { box } = classes;
  const { container, wrapper } = generalClasses;

  return (
    <div className={container}>
      <div className={wrapper}>
        <div className={box}>{children}</div>
      </div>
    </div>
  );
}
