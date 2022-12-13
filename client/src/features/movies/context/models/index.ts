import { IMovie } from '@features/movies/api';

export interface IMovieContext {
  stateMovie: {
    selectedMovie: IMovie | undefined;
    setSelectedMovie: React.Dispatch<React.SetStateAction<IMovie | undefined>>;
  };
}
