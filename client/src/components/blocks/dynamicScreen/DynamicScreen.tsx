import React, { Suspense, useContext } from 'react';
import { HomePageContext } from '@context/home';
import { Loader } from '@components/ui';
import { SearchPanel } from './searchPanel';
import classes from './DynamicScreen.module.scss';

const MovieDetails = React.lazy(async () => await import('./movieDetails'));

export function DynamicScreen(): JSX.Element {
  const { loader } = classes;
  const HomePageCtx = useContext(HomePageContext);
  const stateSelectedMovie = HomePageCtx?.selectedMovie;
  const isShownMovieDetails = stateSelectedMovie !== undefined;

  return (
    <Suspense fallback={<Loader parentClasses={loader} />}>
      {isShownMovieDetails ? <MovieDetails /> : <SearchPanel />}
    </Suspense>
  );
}
