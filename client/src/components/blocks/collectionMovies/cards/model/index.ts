import { ICard } from '../card';

export function getUpdatedCardsOnHover(
  cards: ICard[],
  id: number,
  isShownTooltip: boolean
): ICard[] {
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
  cards: ICard[],
  id: number,
  isShownListOptions: boolean
): ICard[] {
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

export function getYear(date: string): string {
  const [, , year] = date.split('/');
  return year;
}
