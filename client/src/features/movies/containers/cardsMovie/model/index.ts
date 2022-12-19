import { ICardMovie } from '../models';

export function getUpdatedCardsOnHover(
  cards: ICardMovie[],
  id: number,
  isShownTooltip: boolean
): ICardMovie[] {
  const updatedCards = cards.map((card) => {
    const { isShownListOptions } = card.stateTooltip;
    let stateTooltip: typeof card.stateTooltip;
    if (card.id === id) {
      stateTooltip = {
        isShownListOptions,
        isShownTooltip: isShownListOptions ? true : isShownTooltip,
      };
    } else {
      stateTooltip = {
        isShownTooltip: isShownListOptions,
        isShownListOptions,
      };
    }

    return { ...card, stateTooltip };
  });

  return updatedCards;
}

export function getUpdatedCardsOnClickTooltip(
  cards: ICardMovie[],
  id: number,
  isShownListOptions: boolean
): ICardMovie[] {
  const updatedCards = cards.map((card) => {
    const { isShownTooltip } = card.stateTooltip;
    let stateTooltip;
    if (card.id === id) {
      stateTooltip = {
        isShownTooltip: isShownListOptions,
        isShownListOptions,
      };
    } else {
      stateTooltip = {
        isShownTooltip,
        isShownListOptions: false,
      };
    }

    return { ...card, stateTooltip };
  });

  return updatedCards;
}
