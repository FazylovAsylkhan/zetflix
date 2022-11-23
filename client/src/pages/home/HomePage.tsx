import React from 'react';
import { CollectionMovies, DynamicScreen, Footer } from '@components/blocks';
import { ErrorBoundary } from '@components/errorBoundary';
import { HorizontalRule } from '@components/ui';

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
