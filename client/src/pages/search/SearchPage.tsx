import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import {
  CollectionMovies,
  DynamicScreen,
  Footer,
} from '@features/movies/layouts';
import { HorizontalRule, ErrorBoundary } from '@common/components';
import { useUpdateSearchPage } from './hooks';

export function SearchPage(): JSX.Element {
  const { searchQuery } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  useUpdateSearchPage(searchParams, searchQuery);

  const updateParams = (): void => {
    setSearchParams(searchParams);
  };

  return (
    <ErrorBoundary>
      <DynamicScreen
        searchQuery={searchQuery}
        stateSearchParams={{
          searchParams,
          updateParams,
        }}
      />
      <HorizontalRule />
      <CollectionMovies
        searchQuery={searchQuery}
        stateSearchParams={{
          searchParams,
          updateParams,
        }}
      />
      <Footer />
    </ErrorBoundary>
  );
}
