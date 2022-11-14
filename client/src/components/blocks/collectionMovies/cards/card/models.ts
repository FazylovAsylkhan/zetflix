export interface ICard {
  title: string;
  subtitle: string;
  overview: string;
  rating: string;
  date: string;
  runtime: string;
  image: string;
  stateTooltip: {
    isShownTooltip: boolean;
    isShownListOptions: boolean;
  };
  id: number;
}
