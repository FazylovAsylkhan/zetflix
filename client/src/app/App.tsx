import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppRouter } from './router';
import '@common/scss/style.module.scss';

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}
