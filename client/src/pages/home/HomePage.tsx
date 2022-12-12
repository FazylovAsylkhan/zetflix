import React from 'react';
import {
  ConnectedCollectionMovies,
  DynamicScreen,
  Footer,
} from '@features/movies/layouts';
import { HorizontalRule, ErrorBoundary } from '@common/components';

export function HomePage(): JSX.Element {
  return (
    <ErrorBoundary>
      <DynamicScreen />
      <HorizontalRule />
      <ConnectedCollectionMovies />
      <Footer />
    </ErrorBoundary>
  );
}
