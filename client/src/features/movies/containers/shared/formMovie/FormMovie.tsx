import React, { useEffect, useState } from 'react';
import { alertMessage } from '@assets/data';
import { Prompt, Alert } from '@common/components';
import { IMovie } from '@features/movies/api';
import { Form } from './components';
import { FieldsMovie } from './containers';
import { getFilledDataForFields } from './helpers';

interface FormMovieProps {
  movie?: IMovie;
  handlerButtonClose: () => void;
}

export function FormMovie({
  movie,
  handlerButtonClose,
}: FormMovieProps): JSX.Element {
  const [isShownAlert, setIsShownAlert] = useState(false);
  const isShownFormMovie = !isShownAlert;

  const [dataFields, setDataFields] = useState(getFilledDataForFields(movie));
  const [hasData, setHasData] = useState(movie !== undefined);

  useEffect(() => {
    const notHasData = !hasData;
    notHasData && setDataFields(getFilledDataForFields());
  }, [hasData]);

  return (
    <>
      {isShownFormMovie && (
        <Prompt title="Edit movie" handlerButtonClose={handlerButtonClose}>
          <Form
            onSubmit={() => setIsShownAlert(true)}
            stateButtonReset={{
              hasData,
              setHasData,
            }}>
            <FieldsMovie dataFields={dataFields} />
          </Form>
        </Prompt>
      )}
      {isShownAlert && (
        <Alert message={alertMessage} handlerButtonClose={handlerButtonClose} />
      )}
    </>
  );
}
