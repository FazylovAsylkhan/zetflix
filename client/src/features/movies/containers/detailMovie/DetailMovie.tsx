import React, { useContext } from 'react';
import { Movie, Detail } from './components';
import { HeaderMovie } from '../shared/headerMovie';
import { MovieContext } from '@features/movies/context';

export default function MovieDetails(): JSX.Element {
  const MovieCtx = useContext(MovieContext);

  return (
    <Detail>
      <HeaderMovie />
      {MovieCtx?.stateMovie.selectedMovie !== undefined && (
        <Movie data={MovieCtx.stateMovie.selectedMovie} />
      )}
    </Detail>
  );
}
