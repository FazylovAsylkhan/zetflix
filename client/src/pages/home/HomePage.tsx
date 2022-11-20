import React, { Suspense, useContext, useLayoutEffect, useState } from 'react';
import { HomePageContext } from '@context/home';
import { CollectionMovies, SearchPanel, Footer } from '@components/blocks';
import { ErrorBoundary } from '@components/errorBoundary';
import { HorizontalRule, Loader } from '@components/ui';
import { scrollUp } from '@helpers/scrollUp';
import classes from './HomePage.module.scss';

const MovieDetails = React.lazy(
  async () => await import('@components/blocks/movieDetails')
);

export function HomePage(): JSX.Element {
  const { loader } = classes;

  const [isHadSelectedMovie, setIsHadSelectedMovie] = useState(true);
  const HomePageCtx = useContext(HomePageContext);

  useLayoutEffect(() => {
    if (HomePageCtx?.selectedMovie !== undefined) {
      setIsHadSelectedMovie(false);
      scrollUp();
    } else {
      setIsHadSelectedMovie(true);
    }
  }, [HomePageCtx]);

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader parentClasses={loader} />}>
        {isHadSelectedMovie ? <SearchPanel /> : <MovieDetails />}
      </Suspense>
      <HorizontalRule />
      <CollectionMovies />
      <Footer />
    </ErrorBoundary>
  );
}
