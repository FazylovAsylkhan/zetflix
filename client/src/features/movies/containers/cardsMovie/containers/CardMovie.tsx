import React, { useContext, useState } from 'react';
import { confirmMessage } from '@assets/data';
import { Confirm, Tooltip } from '@common/components';
import { scrollUp } from '@common/helpers';
import { MovieContext } from '@features/movies/context';
import { FormMovie } from '../../shared/formMovie';
import { Card } from '../components/card';
import { ICardMovie } from '../models';

interface CardMovieProps {
  dataCardMovie: ICardMovie;
  onHover: (id: number, isShownTooltip: boolean) => void;
  onClickTooltip: (id: number, isOpenedModalSettings: boolean) => void;
}
export function CardMovie({
  dataCardMovie,
  onHover,
  onClickTooltip,
}: CardMovieProps): JSX.Element {
  const { id, stateTooltip } = dataCardMovie;
  const { isShownTooltip, isShownListOptions } = stateTooltip;
  const [isShownFormMovie, setIsShownFormMovie] = useState(false);
  const [isShownConfirm, setIsShownConfirm] = useState(false);

  const handleHover = (state: boolean): void => {
    onHover(id, state);
  };

  const setIsShownListOptions = (state: boolean): void => {
    onClickTooltip(id, state);
  };

  const handleClickFormMovie = (state: boolean): void => {
    state && scrollUp();
    setIsShownFormMovie(state);
    setIsShownListOptions(false);
  };

  const handleClickConfirm = (state: boolean): void => {
    state && scrollUp();
    setIsShownConfirm(state);
    setIsShownListOptions(false);
  };

  const MovieCtx = useContext(MovieContext);
  const handleClickImgOrTitle = (): void => {
    MovieCtx?.stateMovie.setSelectedMovie(dataCardMovie);
    scrollUp();
  };

  return (
    <>
      <Card
        dataMovie={dataCardMovie}
        onHover={handleHover}
        handlerClickImgOrTitle={handleClickImgOrTitle}>
        {isShownTooltip && (
          <Tooltip
            stateListOption={{ isShownListOptions, setIsShownListOptions }}
            onClickButtonEdit={handleClickFormMovie}
            onClickButtonDelete={handleClickConfirm}
          />
        )}
      </Card>

      {isShownFormMovie && (
        <FormMovie
          movie={dataCardMovie}
          handlerButtonClose={() => handleClickFormMovie(false)}
        />
      )}

      {isShownConfirm && (
        <Confirm
          message={confirmMessage}
          handlerButtonClose={() => handleClickConfirm(false)}
        />
      )}
    </>
  );
}
