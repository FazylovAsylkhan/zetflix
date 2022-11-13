import React from 'react';
import { Button } from '../../../ui';
import { Fields } from './fields';
import { MovieFormfields } from '../../../../assets/data';
import classes from './MovieForm.module.scss';

interface MovieFormProps {
  handlerAlert: (state: boolean) => void;
}

export function MovieForm({ handlerAlert }: MovieFormProps): JSX.Element {
  const { movieForm, controller } = classes;

  return (
    <div className={movieForm}>
      <Fields fields={MovieFormfields} />
      <div className={controller}>
        <Button onClick={() => handlerAlert(true)}>submit</Button>
      </div>
    </div>
  );
}
