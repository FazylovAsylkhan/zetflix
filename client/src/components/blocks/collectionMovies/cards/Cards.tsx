import React from 'react';
import Card, { ICard } from './card';
import classes from './Cards.module.scss';

interface CardsProps {
  arrCards: ICard[];
}

function Cards({ arrCards }: CardsProps): JSX.Element {
  const { cards } = classes;

  return (
    <div className={cards}>
      {arrCards.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </div>
  );
}

export default Cards;
