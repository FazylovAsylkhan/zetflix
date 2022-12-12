export interface IFetchMoviesState<T> {
  data: {
    cards: T;
    totalAmount: number;
  };
  isFetching: boolean;
  error: null | string;
}
