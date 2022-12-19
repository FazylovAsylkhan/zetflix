import React from 'react';
import { Button } from '@common/components';
import { IMovie } from '@features/movies/api';
import classes from './Form.module.scss';

interface FormProps {
  data?: IMovie;
  children: React.ReactNode;
  stateButtonReset: {
    hasData: boolean;
    setHasData: (state: boolean) => void;
  };
  onSubmit: () => void;
}

export function Form({
  onSubmit,
  children,
  stateButtonReset,
}: FormProps): JSX.Element {
  const { movieForm, controller } = classes;
  const { hasData, setHasData } = stateButtonReset;

  return (
    <div className={movieForm}>
      {children}
      <div className={controller}>
        {hasData && (
          <Button stylesType="transparent" onClick={() => setHasData(false)}>
            Reset
          </Button>
        )}

        <Button onClick={onSubmit}>submit</Button>
      </div>
    </div>
  );
}
