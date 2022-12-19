import React from 'react';
import generalClasses from '@common/scss/style.module.scss';

interface CollectionProps {
  children: React.ReactNode;
}

export function Collection({ children }: CollectionProps): JSX.Element {
  const { container, wrapper } = generalClasses;

  return (
    <div className={container}>
      <div className={wrapper}>{children}</div>
    </div>
  );
}
