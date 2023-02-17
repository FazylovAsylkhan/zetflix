import React, { useState } from 'react';
import { Button } from '@common/components';
import { FormMovie } from '../formMovie';
import { Header } from './components/header';
import { useAppDispatch, useAppSelector } from '@common/hooks';
import {
  resetDynamicScreen,
  selectCardMovie,
} from '@features/movies/services/redux';

interface HeaderMovieProps {
  parentClasses?: string;
}

export function HeaderMovie({ parentClasses }: HeaderMovieProps): JSX.Element {
  const [isShownFormMovie, setIsShownFormMovies] = useState(false);

  const dispatch = useAppDispatch();
  const cardMovie = useAppSelector(selectCardMovie);
  const isShownSearchButton = cardMovie.dynamicScreen !== null;

  const renderSearchButton = (): JSX.Element => {
    const handleClickSearchButton = (): void => {
      dispatch(resetDynamicScreen());
    };

    return (
      <Button
        stylesType="search"
        type="button"
        onClick={handleClickSearchButton}
      />
    );
  };

  const renderAddButton = (): JSX.Element => {
    return (
      <Button
        stylesType="light"
        type="button"
        onClick={() => setIsShownFormMovies(true)}>
        + Add movie
      </Button>
    );
  };

  return (
    <>
      <Header parentClasses={parentClasses}>
        {isShownSearchButton ? renderSearchButton() : renderAddButton()}
      </Header>

      {isShownFormMovie && (
        <FormMovie
          title="add Movie"
          handlerButtonClose={() => setIsShownFormMovies(false)}
        />
      )}
    </>
  );
}
