export interface ICard {
  title: string;
  subtitle: string;
  date: string;
  image: string;
  stateTooltip: {
    isShownTooltips: boolean;
    isOpenedModalSettings: boolean;
  };
  id: number;
}
