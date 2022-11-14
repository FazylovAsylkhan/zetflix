import React from 'react';
import { Field } from './field';
import { IField } from './field/models';
import classes from './Fields.module.scss';

interface FormFieldsProps {
  fields: IField[];
}

export function Fields({ fields }: FormFieldsProps): JSX.Element {
  const { wrapper } = classes;

  return (
    <div className={wrapper}>
      {fields.map((field) => {
        return <Field key={field.title} data={field} />;
      })}
    </div>
  );
}
