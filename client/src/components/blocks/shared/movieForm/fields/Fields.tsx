import React from 'react';
import { ICard } from '@components/blocks';
import { Field, IField } from './field';
import classes from './Fields.module.scss';

interface FormFieldsProps {
  fields: IField[];
  data?: ICard;
}

export function Fields({ data, fields }: FormFieldsProps): JSX.Element {
  const { wrapper } = classes;

  return (
    <div className={wrapper}>
      {fields.map((field) => {
        return <Field key={field.title} data={data} fieldData={field} />;
      })}
    </div>
  );
}
