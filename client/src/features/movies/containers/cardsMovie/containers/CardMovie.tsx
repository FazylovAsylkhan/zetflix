import React, { useState } from 'react';
import { confirmMessage } from '@assets/data';
import { Confirm, Tooltip } from '@common/components';
import { getNormalizedParams, scrollUp } from '@common/helpers';
import { useAppDispatch, useAppSelector } from '@common/hooks';
import {
  deleteMovieFromCollection,
  resetFormMovie,
  selectUrlParams,
  setDynamicScreen,
  setFormMovie,
} from '@features/movies/services/redux';
import { FormMovie } from '../../shared/formMovie';
import { Card } from '../components/card';
import { ICardMovie } from '../models';

interface CardMovieProps {
  onChange: {
    onHover: (id: number, isShownTooltip: boolean) => void;
    onClickTooltip: (id: number, isOpenedModalSettings: boolean) => void;
  };
  data: {
    id: number;
    cardMovie: ICardMovie;
  };
}
export function CardMovie(props: CardMovieProps): JSX.Element {
  const { data, onChange } = props;
  const { onHover, onClickTooltip } = onChange;
  const dispatch = useAppDispatch();
  const params = useAppSelector(selectUrlParams);
  const { id, cardMovie } = data;
  const { isShownTooltip, isShownListOptions } = cardMovie.stateTooltip;
  const [isShownFormMovie, setIsShownFormMovie] = useState(false);
  const [isShownConfirm, setIsShownConfirm] = useState(false);

  const handleHover = (state: boolean): void => {
    onHover(id, state);
  };

  const setIsShownListOptions = (state: boolean): void => {
    onClickTooltip(id, state);
  };

  const handleClickEditButton = (state: boolean): void => {
    state && scrollUp();
    setIsShownFormMovie(true);
    setIsShownListOptions(false);
    dispatch(setFormMovie(data.cardMovie));
  };

  const handleClickConfirm = (): void => {
    setIsShownConfirm(false);
    setIsShownListOptions(false);
    const normalizedUrl = getNormalizedParams(
      params.sortBy,
      params.sortOrder,
      params.search,
      params.searchBy,
      params.filter,
      params.limit
    );
    void deleteMovieFromCollection(String(id), normalizedUrl)(dispatch);
  };
  const handleClickButtonDelete = (): void => {
    scrollUp();
    setIsShownConfirm(true);
    setIsShownListOptions(true);
  };

  const handleClickImgOrTitle = (): void => {
    dispatch(setDynamicScreen(cardMovie));
    scrollUp();
  };

  return (
    <>
      <Card
        dataMovie={cardMovie}
        onHover={handleHover}
        handlerClickImgOrTitle={handleClickImgOrTitle}>
        {isShownTooltip && (
          <Tooltip
            stateListOption={{ isShownListOptions, setIsShownListOptions }}
            onClickButtonEdit={handleClickEditButton}
            onClickButtonDelete={handleClickButtonDelete}
          />
        )}
      </Card>

      {isShownFormMovie && (
        <FormMovie
          title="edit Movie"
          handlerButtonClose={() => {
            setIsShownFormMovie(false);
            dispatch(resetFormMovie());
          }}
        />
      )}

      {isShownConfirm && (
        <Confirm
          message={confirmMessage}
          handlerButtonClose={() => setIsShownConfirm(false)}
          onConfirm={handleClickConfirm}
        />
      )}
    </>
  );
}
