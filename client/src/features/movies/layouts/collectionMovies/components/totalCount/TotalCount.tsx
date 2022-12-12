import React from 'react';
import { H4 } from '@common/components';
import classes from './TotalCount.module.scss';

interface TotalCountProps {
  value: number;
}

export function TotalCount({ value }: TotalCountProps): JSX.Element {
  const { h4 } = classes;
  return (
    <H4 stylesType="primary" parentClasses={h4}>
      <strong>{value}</strong> movies found
    </H4>
  );
}
