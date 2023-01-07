import React, { useEffect, useState } from 'react';
import { getUpdatedCardsOnClickTooltip, getUpdatedCardsOnHover } from './model';
import { Cards } from './components/cards';
import { CardMovie } from './containers/CardMovie';
import { ICardMovie } from './models';

interface CardsMovieProps {
  cardsMovies: ICardMovie[];
}

export function CardsMovie({ cardsMovies }: CardsMovieProps): JSX.Element {
  const [cards, setCards] = useState(cardsMovies);

  useEffect(() => {
    setCards(cardsMovies);
  }, [cardsMovies]);

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
        if (card.id !== undefined) {
          return (
            <CardMovie
              key={card.id}
              data={{
                id: card.id,
                cardMovie: card,
              }}
              onChange={{
                onHover: handleHover,
                onClickTooltip: handleClickTooltip,
              }}
            />
          );
        } else return null;
      })}
    </Cards>
  );
}
