import React from 'react';
import { Button } from '@common/components';
import { Detail, Header, Movie } from '../components';
import { NamesParams } from '../../shared';
import { IMovie } from '@features/movies/api';

interface DetailMovieProps {
  stateSearchParams: {
    searchParams: URLSearchParams;
    updateParams: () => void;
  };
  movie: IMovie;
}

export function DetailMovie(props: DetailMovieProps): JSX.Element {
  const { stateSearchParams, movie } = props;
  const { searchParams, updateParams } = stateSearchParams;

  return (
    <Detail>
      <Header>
        <Button
          stylesType="search"
          type="button"
          onClick={() => {
            searchParams.delete(NamesParams.MOVIE_ID);
            updateParams();
          }}
        />
      </Header>
      <Movie data={movie} />
    </Detail>
  );
}
