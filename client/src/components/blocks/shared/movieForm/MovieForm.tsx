import React, { useState } from 'react';
import { Button } from 'components/ui';
import { MovieFormfields } from 'assets/data';
import { Fields } from './fields';
import { ICard } from 'components/blocks/collectionMovies/cards/card';
import classes from './MovieForm.module.scss';

interface MovieFormProps {
  data?: ICard;
  handlerAlert: (state: boolean) => void;
}

export function MovieForm({ handlerAlert, data }: MovieFormProps): JSX.Element {
  const { movieForm, controller } = classes;
  const [stateData, setStateDate] = useState(data);

  return (
    <div className={movieForm}>
      <Fields data={stateData} fields={MovieFormfields} />
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
