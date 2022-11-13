import React from 'react';
import { ErrorBoundary } from '../../errorBoundary';
import { SearchPanel, Footer, CollectionMovies } from '../../blocks';
import { HorizontalRule } from '../../ui';

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
