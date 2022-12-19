import React from 'react';
import { Logo } from '@common/components';
import { joinClasses } from '@common/helpers';
import classes from './Header.module.scss';

interface HeaderProps {
  parentClasses?: string;
  children: React.ReactNode;
}

export function Header({ parentClasses, children }: HeaderProps): JSX.Element {
  const { header } = classes;

  return (
    <>
      <header className={joinClasses(parentClasses, header)}>
        <Logo />
        {children}
      </header>
    </>
  );
}
