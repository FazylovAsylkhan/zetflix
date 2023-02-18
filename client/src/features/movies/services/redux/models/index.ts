export { CollectionMoviesActions } from './changingCollectionMovies';
export { ChangingEditFormMovieActions } from './changingEditFormMovie';
export { ChangingDetailMovieActions } from './changingDetailMovie';

export type {
  IChangingEditFormMovieState,
  IResetFormMovie,
  ISetFormMovie,
  IChangingEditFormMovieActions,
} from './changingEditFormMovie';

export type {
  ICollectionMoviesState,
  IRequestMovies,
  ISuccessMovies,
  IFailureMovies,
  ICollectionMoviesActions,
} from './changingCollectionMovies';

export type {
  IChangingDetailMovieState,
  IRequestMovie,
  ISuccessMovie,
  IFailureMovie,
  IResetMovie,
  IChangingDetailMovieActions,
} from './changingDetailMovie';
