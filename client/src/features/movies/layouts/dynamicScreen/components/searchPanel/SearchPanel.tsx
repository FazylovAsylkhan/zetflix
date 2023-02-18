import React from 'react';
import generalClasses from '@common/scss/style.module.scss';
import classes from './SearchPanel.module.scss';

interface SearchPanelProps {
  children: React.ReactNode;
}

export function SearchPanel({ children }: SearchPanelProps): JSX.Element {
  const { container, wrapper } = generalClasses;
  const { searchPanel, background, box } = classes;

  return (
    <div className={searchPanel}>
      <div className={background} />
      <div className={container}>
        <div className={wrapper}>
          <div className={box}>{children}</div>
        </div>
      </div>
    </div>
  );
}
