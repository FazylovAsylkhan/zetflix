import React from 'react';
import { FieldDate, FieldText, FieldDropdown, FieldTextarea } from './utils';
import { arrNamesField, dataFields } from '../../constants';
import { NamesFields, IFormValues, IFormErrors } from '../../models';
import classes from './fields.module.scss';

interface FieldsProps {
  fields: {
    handlerChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    handlerBlur: (
      e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    values: IFormValues;
    errors: IFormErrors;
  };
  form: {
    setFieldValue: (
      field: string,
      value: string,
      shouldValidate?: boolean | undefined
    ) => Promise<void> | Promise<IFormErrors>;
  };
}

export function Fields(props: FieldsProps): JSX.Element {
  const { fields, form } = props;
  const { handlerChange, handlerBlur, values, errors } = fields;
  const { setFieldValue } = form;
  const { wrapper, label } = classes;

  const renderField = (fieldName: string): JSX.Element => {
    switch (fieldName) {
      case NamesFields.TITLE_MOVIE:
      case NamesFields.URL_IMAGE:
      case NamesFields.RUNTIME:
      case NamesFields.RATING:
        return (
          <FieldText
            key={fieldName}
            data={dataFields[fieldName]}
            field={{
              onChange: handlerChange,
              name: fieldName,
              onBlur: handlerBlur,
              value: values[fieldName],
              error: errors[fieldName],
            }}
          />
        );
      case NamesFields.RELEASE_DATE:
        return (
          <FieldDate
            key={fieldName}
            data={dataFields[fieldName]}
            field={{
              onChange: handlerChange,
              name: NamesFields.RELEASE_DATE,
              value: values[fieldName],
              error: errors[fieldName],
            }}
            form={{ setFieldValue }}
          />
        );
      case NamesFields.GENRE:
        return (
          <FieldDropdown
            key={fieldName}
            data={dataFields[fieldName]}
            field={{
              name: fieldName,
              value: values[fieldName],
              error: errors[fieldName],
            }}
            form={{ setFieldValue }}
          />
        );
      case NamesFields.OVERVIEW:
        return (
          <FieldTextarea
            key={fieldName}
            data={{ ...dataFields[fieldName], parentClasses: label }}
            field={{
              onChange: handlerChange,
              name: fieldName,
              onBlur: handlerBlur,
              value: values[fieldName],
              error: errors[fieldName],
            }}
          />
        );
      default:
        throw new Error('Name of field not found!');
    }
  };

  return (
    <div className={wrapper}>
      {arrNamesField.map((fieldName) => renderField(fieldName))}
    </div>
  );
}
