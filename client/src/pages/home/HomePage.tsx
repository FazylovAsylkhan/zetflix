import React from 'react';
import {
  CollectionMovies,
  DynamicScreen,
  Footer,
} from '@features/movies/layouts';
import { HorizontalRule, ErrorBoundary } from '@common/components';

export function HomePage(): JSX.Element {
  return (
    <ErrorBoundary>
      <DynamicScreen />
      <HorizontalRule />
      <CollectionMovies />
      <Footer />
    </ErrorBoundary>
  );
}
