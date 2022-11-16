import React, { useState } from 'react';
import { MovieFormFields } from '@assets/data';
import { Button } from '@components/ui';
import { ICard } from '@components/blocks';
import { Fields } from './fields';
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
      <Fields data={stateData} fields={MovieFormFields} />
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
