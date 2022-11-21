import React, { Suspense, useContext } from 'react';
import { HomePageContext } from '@context/home';
import { CollectionMovies, SearchPanel, Footer } from '@components/blocks';
import { ErrorBoundary } from '@components/errorBoundary';
import { HorizontalRule, Loader } from '@components/ui';
import classes from './HomePage.module.scss';

const MovieDetails = React.lazy(
  async () => await import('@components/blocks/movieDetails')
);

export function HomePage(): JSX.Element {
  const { loader } = classes;
  const HomePageCtx = useContext(HomePageContext);
  const stateSelectedMovie = HomePageCtx?.selectedMovie;
  const isShownMovieDetails = stateSelectedMovie !== undefined;

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader parentClasses={loader} />}>
        {isShownMovieDetails ? <MovieDetails /> : <SearchPanel />}
      </Suspense>
      <HorizontalRule />
      <CollectionMovies />
      <Footer />
    </ErrorBoundary>
  );
}
