import React from 'react';
import { Logo } from 'components/blocks/shared';
import classes from './Footer.module.scss';

export function Footer(): JSX.Element {
  const { footer } = classes;
  return (
    <footer className={footer}>
      <Logo />
    </footer>
  );
}
