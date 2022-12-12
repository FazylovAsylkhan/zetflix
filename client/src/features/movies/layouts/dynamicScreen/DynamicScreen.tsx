import React, { useContext } from 'react';
import { SearchPanelMovie } from '@features/movies/containers';
import { LoaderScreen } from './components/loaderScreen';
import { MovieContext } from '@features/movies/context';

const DetailMovie = React.lazy(
  async () => await import('@features/movies/containers/detailMovie')
);

export function DynamicScreen(): JSX.Element {
  const MovieCtx = useContext(MovieContext);
  const stateSelectedMovie = MovieCtx?.stateMovie.selectedMovie;
  const isLoadedDetailsMovie = stateSelectedMovie !== undefined;

  return (
    <LoaderScreen>
      {isLoadedDetailsMovie ? <DetailMovie /> : <SearchPanelMovie />}
    </LoaderScreen>
  );
}
