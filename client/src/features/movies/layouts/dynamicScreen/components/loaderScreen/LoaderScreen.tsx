import React, { Suspense } from 'react';
import { Loader } from '@common/components';
import classes from './LoaderScreen.module.scss';

interface ScreenProps {
  children: React.ReactNode;
}

export function LoaderScreen({ children }: ScreenProps): JSX.Element {
  const { loader } = classes;

  return (
    <Suspense fallback={<Loader parentClasses={loader} />}>{children}</Suspense>
  );
}
