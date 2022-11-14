import React, { useState } from 'react';
import { Button, Prompt } from '../../../ui';
import { Logo } from '../logo';
import classes from './Header.module.scss';

export function Header(): JSX.Element {
  const { header } = classes;
  const [isShownPrompt, setIsShownPrompt] = useState(false);

  return (
    <>
      <header className={header}>
        <Logo />
        <Button
          stylesType="light"
          type="button"
          onClick={() => setIsShownPrompt(!isShownPrompt)}>
          + Add movie
        </Button>
      </header>

      {isShownPrompt && (
        <Prompt
          title="EDIT MOVIE"
          handlerButtonClose={() => setIsShownPrompt(false)}
        />
      )}
    </>
  );
}
