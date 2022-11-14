export interface ICard {
  title: string;
  subtitle: string;
  date: string;
  image: string;
  stateTooltip: {
    isShownTooltip: boolean;
    isShownListOptions: boolean;
  };
  id: number;
}
