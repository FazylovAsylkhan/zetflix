import React, { useState } from 'react';
import { Card, ICard } from './card';
import classes from './Cards.module.scss';
import { getUpdatedCardsOnClickTooltip, getUpdatedCardsOnHover } from './model';

interface CardsProps {
  data: ICard[];
}

export function Cards({ data }: CardsProps): JSX.Element {
  const { wrapper } = classes;
  const [cards, setCards] = useState(data);

  const handleHover = (id: number, isShownTooltip: boolean): void => {
    const updatedCards = getUpdatedCardsOnHover(cards, id, isShownTooltip);

    setCards(updatedCards);
  };

  const handleClickTooltip = (
    id: number,
    isOpenedModalSettings: boolean
  ): void => {
    const updatedCards = getUpdatedCardsOnClickTooltip(
      cards,
      id,
      isOpenedModalSettings
    );
    setCards(updatedCards);
  };

  return (
    <div className={wrapper}>
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            data={card}
            onHover={handleHover}
            onClickTooltip={handleClickTooltip}
          />
        );
      })}
    </div>
  );
}
