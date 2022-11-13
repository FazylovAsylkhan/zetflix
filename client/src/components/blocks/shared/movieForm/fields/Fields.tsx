import React from 'react';
import classes from './Fields.module.scss';
import { Field } from './field';
import { IField } from './models';

interface FormFieldsProps {
  fields: IField[];
}

export function Fields({ fields }: FormFieldsProps): JSX.Element {
  const { wrapper } = classes;

  return (
    <div className={wrapper}>
      {fields.map((field) => {
        return <Field key={field.title} field={field} />;
      })}
    </div>
  );
}
