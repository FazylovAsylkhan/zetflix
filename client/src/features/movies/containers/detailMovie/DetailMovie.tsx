import React from 'react';
import { Movie, Detail } from './components';
import { HeaderMovie } from '../shared/headerMovie';
import { ICardMovie } from '../cardsMovie';

interface MovieDetailsProps {
  cardMovie: ICardMovie;
}

export default function MovieDetails(props: MovieDetailsProps): JSX.Element {
  const { cardMovie } = props;

  return (
    <Detail>
      <HeaderMovie />
      <Movie data={cardMovie} />
    </Detail>
  );
}
