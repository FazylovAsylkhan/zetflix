import React from 'react';
import { Movie, Detail } from './components';
import { HeaderMovie } from '../shared/headerMovie';
import { IMovie } from '@features/movies/api';

interface MovieDetailsProps {
  movie: IMovie;
}

export default function MovieDetails(props: MovieDetailsProps): JSX.Element {
  const { movie } = props;

  return (
    <Detail>
      <HeaderMovie />
      <Movie data={movie} />
    </Detail>
  );
}
