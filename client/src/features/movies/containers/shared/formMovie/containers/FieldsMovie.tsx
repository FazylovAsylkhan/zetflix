import React from 'react';
import { Fields, Field } from '../components';
import { arrNamesField } from '../constants';
import { IFieldsData } from '../models';

interface FieldsMovieProps {
  dataFields: IFieldsData;
}

export function FieldsMovie({ dataFields }: FieldsMovieProps): JSX.Element {
  return (
    <Fields>
      {arrNamesField.map((nameField) => {
        return (
          <Field
            key={nameField}
            nameField={nameField}
            initialValue={dataFields[nameField]}
          />
        );
      })}
    </Fields>
  );
}
