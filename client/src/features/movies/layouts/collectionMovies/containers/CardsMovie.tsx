import { IMovie } from '@features/movies/api';
import React, { useEffect, useState } from 'react';
import { NamesParams } from '../../shared';
import { Cards } from '../components';
import { addStateTooltip } from '../helpers';
import {
  getUpdatedCardsOnClickTooltip,
  getUpdatedCardsOnHover,
} from '../model';
import { ICardMovie } from '../models';
import { CardMovie } from './CardMovie';

interface CardsMovieProps {
  stateSearchParams: {
    searchParams: URLSearchParams;
    updateParams: () => void;
  };
  data: IMovie[];
}

export function CardsMovie(props: CardsMovieProps): JSX.Element {
  const { stateSearchParams, data } = props;
  const { searchParams, updateParams } = stateSearchParams;

  const [cardsMovies, setCardsMovies] = useState<ICardMovie[]>([]);

  useEffect(() => {
    const cardsMovie = addStateTooltip(data);
    setCardsMovies(cardsMovie);
  }, [data]);

  const handleSelectionOfMovie = (id: number): void => {
    searchParams.set(NamesParams.MOVIE_ID, String(id));
    updateParams();
  };

  const handleHoverCardMovie = (id: number, isShownTooltip: boolean): void => {
    const updatedCards = getUpdatedCardsOnHover(
      cardsMovies,
      id,
      isShownTooltip
    );
    setCardsMovies(updatedCards);
  };

  const handleClickTooltip = (
    id: number,
    isOpenedModalSettings: boolean
  ): void => {
    const updatedCards = getUpdatedCardsOnClickTooltip(
      cardsMovies,
      id,
      isOpenedModalSettings
    );
    setCardsMovies(updatedCards);
  };

  return (
    <Cards>
      {cardsMovies.map((cardMovie) => (
        <CardMovie
          key={cardMovie.id}
          onChange={{
            onHoverCardMovie: handleHoverCardMovie,
            onClickTooltip: handleClickTooltip,
            onSelectCardMovie: handleSelectionOfMovie,
          }}
          data={cardMovie}
          stateSearchParams={stateSearchParams}
        />
      ))}
    </Cards>
  );
}
