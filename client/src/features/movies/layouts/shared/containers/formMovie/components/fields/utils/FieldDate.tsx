import React from 'react';
import { InputDate, Label } from '@common/components';
import { IFormErrors, NamesFields } from '../../../models';
import { Message } from '../../message';

interface FieldDateProps {
  field: {
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    error: string | undefined;
  };
  form: {
    setFieldValue: (
      field: string,
      value: string,
      shouldValidate?: boolean | undefined
    ) => Promise<void> | Promise<IFormErrors>;
  };
  data: {
    title: string;
    placeholder: string;
  };
}

export function FieldDate(props: FieldDateProps): JSX.Element {
  const { field, form, data } = props;
  const { setFieldValue } = form;
  const { name, value, onChange, error } = field;
  const { title, placeholder } = data;

  const handleValueSelectedDate = (date: string): void => {
    void setFieldValue(NamesFields.RELEASE_DATE, date);
  };

  return (
    <Label id={name} title={title}>
      <InputDate
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        handlerValueSelectedDate={handleValueSelectedDate}
      />
      {error !== undefined && <Message>{error}</Message>}
    </Label>
  );
}
