import React, { useState } from 'react';
import { Button, Prompt } from '../../../ui';
import { Logo } from '../logo';
import classes from './Header.module.scss';

export function Header(): JSX.Element {
  const { header } = classes;
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  return (
    <>
      <header className={header}>
        <Logo />
        <Button
          stylesType="light"
          type="button"
          onClick={() => setIsOpenedModal(!isOpenedModal)}>
          + Add movie
        </Button>
      </header>

      {isOpenedModal && (
        <Prompt
          title="EDIT MOVIE"
          handlerButtonClose={() => setIsOpenedModal(false)}
        />
      )}
    </>
  );
}
