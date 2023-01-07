import React from 'react';
import { SearchPanelMovie } from '@features/movies/containers';
import { LoaderScreen } from './components/loaderScreen';
import { useAppSelector } from '@common/hooks';
import { selectCardMovie } from '@features/movies/services/redux';

const DetailMovie = React.lazy(
  async () => await import('@features/movies/containers/detailMovie')
);

export function DynamicScreen(): JSX.Element {
  const cardMovie = useAppSelector(selectCardMovie);
  console.log(cardMovie);

  return (
    <LoaderScreen>
      {cardMovie.dynamicScreen !== null ? (
        <DetailMovie cardMovie={cardMovie.dynamicScreen} />
      ) : (
        <SearchPanelMovie />
      )}
    </LoaderScreen>
  );
}
