import { IMovie } from '@features/movies/api';

export interface IMovieContext {
  stateMovie: {
    selectedMovie: IMovie | undefined;
    setSelectedMovie: React.Dispatch<React.SetStateAction<IMovie | undefined>>;
  };
  stateGenreParams: {
    genreParams: string;
    setGenreParams: (params: string) => void;
  };
  stateSortingParams: {
    sortingParams: string;
    setSortingParams: (params: string) => void;
  };
  stateSearchParams: {
    searchParams: string;
    setSearchParams: (params: string) => void;
  };
  stateCurrentUrl: {
    currentUrlParams: string;
    setCurrentUrlParams: (params: string) => void;
  };
}
