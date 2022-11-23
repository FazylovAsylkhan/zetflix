import React, { useContext, useState } from 'react';
import { Button, Prompt } from '@components/ui';
import { HomePageContext } from '@context/home';
import { Logo } from '../logo';
import { joinClasses } from '@helpers/joinClasses';
import classes from './Header.module.scss';

interface HeaderProps {
  parentClasses?: string;
}

export function Header({ parentClasses }: HeaderProps): JSX.Element {
  const { header, searchButton } = classes;
  const [isShownPrompt, setIsShownPrompt] = useState(false);
  const HomePageCtx = useContext(HomePageContext);
  const stateSelectedMovie = HomePageCtx?.selectedMovie;
  const isShownSearchButton = stateSelectedMovie !== undefined;

  const renderSearchButton = (): JSX.Element => {
    const handleClickSearchButton = (): void => {
      HomePageCtx?.setSelectedMovie(undefined);
    };

    return (
      <button
        type="button"
        className={searchButton}
        onClick={handleClickSearchButton}
      />
    );
  };

  const renderAddButton = (): JSX.Element => {
    const handleClickAddButton = (): void => {
      setIsShownPrompt(!isShownPrompt);
    };

    return (
      <Button
        stylesType="light"
        type="button"
        onClick={() => handleClickAddButton()}>
        + Add movie
      </Button>
    );
  };

  return (
    <>
      <header className={joinClasses(parentClasses, header)}>
        <Logo />
        {isShownSearchButton ? renderSearchButton() : renderAddButton()}
      </header>

      {isShownPrompt && (
        <Prompt
          title="ADD MOVIE"
          handlerButtonClose={() => setIsShownPrompt(false)}
        />
      )}
    </>
  );
}
