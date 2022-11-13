import React, { useState } from 'react';
import { Card, ICard } from './card';
import classes from './Cards.module.scss';

interface CardsProps {
  arrCards: ICard[];
}

export function Cards({ arrCards }: CardsProps): JSX.Element {
  const { wrapper } = classes;
  const [cards, setCards] = useState(arrCards);

  const handleChangingTooltips = (
    id: number,
    isShownTooltips: boolean
  ): void => {
    const updatedCards = cards.map((card) => {
      const { isOpenedModalSettings } = card.stateTooltip;
      let stateTooltip;
      if (card.id === id) {
        stateTooltip = {
          isOpenedModalSettings,
          isShownTooltips: isOpenedModalSettings ? true : isShownTooltips,
        };
      } else {
        stateTooltip = {
          isOpenedModalSettings,
          isShownTooltips: isOpenedModalSettings,
        };
      }

      return { ...card, stateTooltip };
    });

    setCards(updatedCards);
  };

  const handleChangingModalSettings = (
    id: number,
    isOpenedModalSettings: boolean
  ): void => {
    const updatedCards = cards.map((card) => {
      const { isShownTooltips } = card.stateTooltip;
      let stateTooltip;
      if (card.id === id) {
        stateTooltip = {
          isShownTooltips: isOpenedModalSettings,
          isOpenedModalSettings,
        };
      } else {
        stateTooltip = {
          isShownTooltips,
          isOpenedModalSettings: false,
        };
      }

      return { ...card, stateTooltip };
    });

    setCards(updatedCards);
  };

  return (
    <div className={wrapper}>
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            data={card}
            onChangeStateTooltips={handleChangingTooltips}
            onChangeStateModalSettings={handleChangingModalSettings}
          />
        );
      })}
    </div>
  );
}
