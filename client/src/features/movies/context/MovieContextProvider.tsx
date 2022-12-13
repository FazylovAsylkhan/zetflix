import { IMovie } from '@features/movies/api';
import React, { createContext, useState } from 'react';
import { IMovieContext } from './models';

export const MovieContext = createContext<IMovieContext | null>(null);

interface MovieContextProviderProps {
  children: React.ReactNode;
}

export function MovieContextProvider({
  children,
}: MovieContextProviderProps): JSX.Element {
  const [selectedMovie, setSelectedMovie] = useState<IMovie | undefined>(
    undefined
  );

  const value = {
    stateMovie: {
      selectedMovie,
      setSelectedMovie,
    },
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}
