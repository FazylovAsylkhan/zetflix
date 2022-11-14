import React from 'react';
import { Button } from '../../../ui';
import { Fields } from './fields';
import { MovieFormfields } from '../../../../assets/data';
import classes from './MovieForm.module.scss';
import { ICard } from '../../collectionMovies/cards/card';

interface MovieFormProps {
  data?: ICard;
  handlerAlert: (state: boolean) => void;
}

export function MovieForm({ handlerAlert, data }: MovieFormProps): JSX.Element {
  const { movieForm, controller } = classes;

  return (
    <div className={movieForm}>
      <Fields data={data} fields={MovieFormfields} />
      <div className={controller}>
        <Button onClick={() => handlerAlert(true)}>submit</Button>
      </div>
    </div>
  );
}
