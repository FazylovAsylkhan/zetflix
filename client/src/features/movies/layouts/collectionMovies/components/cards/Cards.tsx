import React from 'react';
import classes from './Cards.module.scss';

interface CardsProps {
  children: React.ReactNode;
}

export function Cards({ children }: CardsProps): JSX.Element {
  const { cards } = classes;

  return <div className={cards}>{children}</div>;
}
