import React, { useContext, useEffect, useState } from 'react';
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
  const [isShownSearchPanel, setIsShownSearchPanel] = useState(true);
  const HomePageCtx = useContext(HomePageContext);
  useEffect(() => {
    if (HomePageCtx?.selectedMovie !== undefined) {
      setIsShownSearchPanel(false);
    } else {
      setIsShownSearchPanel(true);
    }
  }, [HomePageCtx]);

  const handleClickSearchButton = (): void => {
    HomePageCtx?.setSelectedMovie(undefined);
  };

  const handleClickAddButton = (): void => {
    setIsShownPrompt(!isShownPrompt);
  };

  return (
    <>
      <header className={joinClasses(parentClasses, header)}>
        <Logo />
        {isShownSearchPanel ? (
          <Button
            stylesType="light"
            type="button"
            onClick={() => handleClickAddButton()}>
            + Add movie
          </Button>
        ) : (
          <button
            type="button"
            className={searchButton}
            onClick={handleClickSearchButton}
          />
        )}
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
