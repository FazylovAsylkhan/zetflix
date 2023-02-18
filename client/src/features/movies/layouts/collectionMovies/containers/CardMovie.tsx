import React, { useState } from 'react';
import { confirmDeletingMovieMessage } from '@assets/data';
import { Confirm, Tooltip } from '@common/components';
import { scrollUp } from '@common/helpers';
import { useAppDispatch, useAppSelector } from '@common/hooks';
import {
  resetFormMovie,
  selectEditFormMovie,
  setFormMovie,
} from '@features/movies/services/redux';
import { Card } from '../components';
import { ICardMovie } from '../models';
import { FormMovie } from '../../shared';
import { deleteMovie, IMovieEssential, putMovie } from '@features/movies/api';

interface CardMovieProps {
  onChange: {
    onHoverCardMovie: (id: number, isShownTooltip: boolean) => void;
    onClickTooltip: (id: number, isOpenedModalSettings: boolean) => void;
    onSelectCardMovie: (id: number) => void;
  };
  data: ICardMovie;
  stateSearchParams: {
    searchParams: URLSearchParams;
    updateParams: () => void;
  };
}
export function CardMovie(props: CardMovieProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { data, onChange, stateSearchParams } = props;
  const { searchParams, updateParams } = stateSearchParams;
  const { id, stateTooltip } = data;
  const { isShownTooltip, isShownListOptions } = stateTooltip;
  const { onHoverCardMovie, onClickTooltip, onSelectCardMovie } = onChange;
  const [isShownFormMovie, setIsShownFormMovie] = useState(false);
  const [isShownConfirm, setIsShownConfirm] = useState(false);

  const editFormMovie = useAppSelector(selectEditFormMovie);

  const setIsShownListOptions = (state: boolean): void => {
    onClickTooltip(id, state);
  };

  const handleClickEditButton = (state: boolean): void => {
    state && scrollUp();
    setIsShownFormMovie(true);
    setIsShownListOptions(false);
    dispatch(setFormMovie(data));
    searchParams.set('edit', 'movie');
    updateParams();
  };

  const handleClickConfirm = (): void => {
    setIsShownConfirm(false);
    setIsShownListOptions(false);
    void deleteMovie(String(id));
    searchParams.delete('destroy');
    updateParams();
  };
  const handleClickButtonDelete = (): void => {
    scrollUp();
    setIsShownConfirm(true);
    setIsShownListOptions(true);
    searchParams.set('destroy', 'movie');
    updateParams();
  };

  const handleClickImgOrTitle = (): void => {
    onSelectCardMovie(id);
    scrollUp();
  };

  const handleEditingMovie = async (
    formValues: IMovieEssential
  ): Promise<void> => {
    const movie = { ...formValues, id };
    await putMovie(movie);
    setIsShownFormMovie(false);
    dispatch(resetFormMovie());
    searchParams.delete('edit');
    updateParams();
  };

  return (
    <>
      <Card
        dataMovie={data}
        onHover={(state: boolean) => onHoverCardMovie(id, state)}
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
          initialState={editFormMovie.formValues}
          onSubmit={handleEditingMovie}
          title="edit Movie"
          onReset={() => {
            dispatch(resetFormMovie());
          }}
          handlerButtonClose={() => {
            setIsShownFormMovie(false);
            dispatch(resetFormMovie());
            searchParams.delete('edit');
            updateParams();
          }}
        />
      )}

      {isShownConfirm && (
        <Confirm
          message={confirmDeletingMovieMessage}
          handlerButtonClose={() => {
            setIsShownConfirm(false);
            searchParams.delete('destroy');
            updateParams();
          }}
          onConfirm={handleClickConfirm}
        />
      )}
    </>
  );
}
