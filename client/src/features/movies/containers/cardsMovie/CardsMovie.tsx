import React, { useEffect, useState } from 'react';
import { getUpdatedCardsOnClickTooltip, getUpdatedCardsOnHover } from './model';
import { Cards } from './components/cards';
import { CardMovie } from './containers/CardMovie';
import { ICardMovie } from './models';

interface CardsMovieProps {
  dataCards: ICardMovie[];
}

export function CardsMovie({ dataCards }: CardsMovieProps): JSX.Element {
  const [cards, setCards] = useState(dataCards);

  useEffect(() => {
    setCards(dataCards);
  }, [dataCards]);

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
    <Cards>
      {cards.map((card) => {
        return (
          <CardMovie
            key={card.id}
            dataCardMovie={card}
            onHover={handleHover}
            onClickTooltip={handleClickTooltip}
          />
        );
      })}
    </Cards>
  );
}
