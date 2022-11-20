import React from 'react';
import { HomePage } from '@pages/home';
import { HomePageContextProvider } from '@context/home';
import '@scss/style.module.scss';

export function App(): JSX.Element {
  return (
    <HomePageContextProvider>
      <HomePage />
    </HomePageContextProvider>
  );
}
