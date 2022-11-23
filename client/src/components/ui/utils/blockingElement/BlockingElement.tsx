import React, { useEffect } from 'react';

export function BlockingElement(): JSX.Element {
  const block = (): void => {
    document.body.style.overflow = 'hidden';
  };
  const removeBlocking = (): void => {
    document.body.style.overflow = 'auto';
  };

  useEffect((): (() => void) => {
    block();

    return removeBlocking;
  });

  return <div />;
}
