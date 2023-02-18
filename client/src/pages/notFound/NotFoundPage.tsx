import React from 'react';
import { ErrorBoundary, H2 } from '@common/components';
import { Footer } from '@features/movies/layouts';

export function NotFoundPage(): JSX.Element {
  return (
    <ErrorBoundary>
      <H2>404: Page not found</H2>
      <Footer />
    </ErrorBoundary>
  );
}
