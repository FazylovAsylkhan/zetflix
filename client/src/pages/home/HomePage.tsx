import React from 'react';
import { CollectionMovies, Footer, SearchPanel } from '@components/blocks';
import { ErrorBoundary } from '@components/errorBoundary';
import { HorizontalRule } from '@components/ui';

export function HomePage(): JSX.Element {
  return (
    <ErrorBoundary>
      <SearchPanel />
      <HorizontalRule />
      <CollectionMovies />
      <Footer />
    </ErrorBoundary>
  );
}
