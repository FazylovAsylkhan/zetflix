import React, { useContext, useState } from 'react';
import { Button } from '@common/components';
import { FormMovie } from '../formMovie';
import { Header } from './components/header';
import { MovieContext } from '@features/movies/context';

interface HeaderMovieProps {
  parentClasses?: string;
}

export function HeaderMovie({ parentClasses }: HeaderMovieProps): JSX.Element {
  const [isShownFormMovie, setIsShownFormMovies] = useState(false);

  const MovieCtx = useContext(MovieContext);
  const stateSelectedMovie = MovieCtx?.stateMovie.selectedMovie;
  const isShownSearchButton = stateSelectedMovie !== undefined;

  const renderSearchButton = (): JSX.Element => {
    const handleClickSearchButton = (): void => {
      MovieCtx?.stateMovie.setSelectedMovie(undefined);
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
  const renderedButton = isShownSearchButton
    ? renderSearchButton()
    : renderAddButton();

  return (
    <>
      <Header parentClasses={parentClasses}>{renderedButton}</Header>
      {isShownFormMovie && (
        <FormMovie handlerButtonClose={() => setIsShownFormMovies(false)} />
      )}
    </>
  );
}
