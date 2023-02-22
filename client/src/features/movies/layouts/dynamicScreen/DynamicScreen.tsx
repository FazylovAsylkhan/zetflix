import React from 'react';
import { useAppSelector } from '@app/store';
import { selectDetailMovie } from '@features/movies/services/redux';
import { Loader } from '@common/components';

import { LoaderScreen } from './components';
import { DetailMovie, SearchPanelMovie } from './containers';

interface DynamicScreenProps {
  stateSearchParams: {
    searchParams: URLSearchParams;
    updateParams: () => void;
  };
  searchQuery: string | undefined;
}

export function DynamicScreen(props: DynamicScreenProps): JSX.Element {
  const { stateSearchParams, searchQuery } = props;
  const { response, isFetching, error } = useAppSelector(selectDetailMovie);

  return (
    <LoaderScreen>
      {response !== null ? (
        <DetailMovie stateSearchParams={stateSearchParams} movie={response} />
      ) : (
        <SearchPanelMovie
          stateSearchParams={stateSearchParams}
          searchQuery={searchQuery}
        />
      )}
      {isFetching && <Loader isWithBlockingWindow />}
      {error !== null && <div>{error}</div>}
    </LoaderScreen>
  );
}
