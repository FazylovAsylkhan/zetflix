import { ICard } from '@components/blocks';
import React, { createContext, useState } from 'react';

export interface IHomePageContext {
  selectedMovie: ICard | undefined;
  setSelectedMovie: React.Dispatch<React.SetStateAction<ICard | undefined>>;
}

export const HomePageContext = createContext<IHomePageContext | null>(null);

interface HomePageContextProviderProps {
  children: React.ReactNode;
}

export function HomePageContextProvider({
  children,
}: HomePageContextProviderProps): JSX.Element {
  const [selectedMovie, setSelectedMovie] = useState<ICard | undefined>(
    undefined
  );

  const value = {
    selectedMovie,
    setSelectedMovie,
  };

  return (
    <HomePageContext.Provider value={value}>
      {children}
    </HomePageContext.Provider>
  );
}
