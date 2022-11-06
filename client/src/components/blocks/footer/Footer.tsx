import React from 'react';
import Logo from '../shared/logo';
import classes from './Footer.module.scss';

function Footer(): JSX.Element {
  const { footer } = classes;
  return (
    <div className={footer}>
      <Logo />
    </div>
  );
}

export default Footer;
