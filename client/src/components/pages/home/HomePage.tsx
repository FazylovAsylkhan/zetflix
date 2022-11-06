import React from 'react';
import SearchPanel from '../../blocks/searchPanel';
import Footer from '../../blocks/footer';
import CollectionMovies from '../../blocks/collectionMovies';
import classes from './HomePage.module.scss';
import ErrorBoundary from '../../errorBoundary';

function HomePage(): JSX.Element {
  const { hr } = classes;
  return (
    <ErrorBoundary>
      <SearchPanel />
      <hr className={hr} />
      <CollectionMovies />
      <Footer />
    </ErrorBoundary>
  );
}

export default HomePage;
