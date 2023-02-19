import React from 'react';
import { useAppSelector } from '@app/store';
import { selectCollectionMovies } from '@features/movies/services/redux';
import { Loader } from '@common/components';

import { Collection, TotalCount } from './components';
import { CardsMovie, SidebarMovie } from './containers';

interface CollectionMoviesProps {
  stateSearchParams: {
    searchParams: URLSearchParams;
    updateParams: () => void;
  };
}

export function CollectionMovies(props: CollectionMoviesProps): JSX.Element {
  const { stateSearchParams } = props;

  const { response, isFetching, error } = useAppSelector(
    selectCollectionMovies
  );

  return (
    <>
      {error !== null && <div>{error}</div>}
      {isFetching && <Loader isWithBlockingWindow={true} />}
      {response !== null && (
        <Collection>
          <SidebarMovie stateSearchParams={stateSearchParams} />
          <TotalCount value={response.totalAmount} />
          <CardsMovie
            data={response.data}
            stateSearchParams={stateSearchParams}
          />
        </Collection>
      )}
    </>
  );
}
