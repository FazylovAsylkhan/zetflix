import React, { useState } from 'react';
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
  const [stateData, setStateDate] = useState(data);

  return (
    <div className={movieForm}>
      {stateData !== undefined && (
        <Fields data={stateData} fields={MovieFormfields} />
      )}
      {stateData === undefined && <Fields fields={MovieFormfields} />}
      <div className={controller}>
        {stateData !== undefined && (
          <Button
            stylesType="transparent"
            onClick={() => setStateDate(undefined)}>
            Reset
          </Button>
        )}

        <Button onClick={() => handlerAlert(true)}>submit</Button>
      </div>
    </div>
  );
}
