import React, { useContext } from 'react';
import { Header } from '../shared';
import { HomePageContext } from '@context/home';
import { Movie } from './Movie';
import generalClasses from '@scss/style.module.scss';
import classes from './MovieDetails.module.scss';

export default function MovieDetails(): JSX.Element {
  const { header } = classes;
  const { container, wrapper } = generalClasses;
  const HomePageCtx = useContext(HomePageContext);

  return (
    <div className={container}>
      <div className={wrapper}>
        <Header parentClasses={header} />
        {HomePageCtx?.selectedMovie != null && (
          <Movie data={HomePageCtx.selectedMovie} />
        )}
      </div>
    </div>
  );
}
