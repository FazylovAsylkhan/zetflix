import React from 'react';
import { Button, BUTTON_TYPE_BUTTON, CLASSNAME_LIGHT } from '../../../ui';
import Logo from '../logo';
import classes from './Header.module.scss';

function Header(): JSX.Element {
  const { header } = classes;

  return (
    <header className={header}>
      <Logo />
      <Button stylesType={CLASSNAME_LIGHT} type={BUTTON_TYPE_BUTTON}>
        + Add movie
      </Button>
    </header>
  );
}

export default Header;
