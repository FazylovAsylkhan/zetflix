import React from 'react';
import { Provider } from 'react-redux';
import { HomePage } from '@pages/home';
import { MovieContextProvider } from '@features/movies/context';
import { store } from './store';
import '@common/scss/style.module.scss';

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <MovieContextProvider>
        <HomePage />
      </MovieContextProvider>
    </Provider>
  );
}
