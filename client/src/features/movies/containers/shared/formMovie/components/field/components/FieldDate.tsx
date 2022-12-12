import React from 'react';
import { InputDate, Label } from '@common/components';

interface FieldDateProps {
  dataField: {
    title: string;
    placeholder: string;
  };
  stateValue: {
    value: string;
    setValue: (value: string) => void;
  };
}

export function FieldDate(props: FieldDateProps): JSX.Element {
  const { dataField, stateValue } = props;
  const { value, setValue } = stateValue;
  const { title, placeholder } = dataField;

  const handleChangingInputDate = (valueSelectedDate: string): void => {
    setValue(valueSelectedDate);
  };

  return (
    <Label id={title} title={title}>
      <InputDate
        value={value}
        onChange={handleChangingInputDate}
        placeholder={placeholder}
      />
    </Label>
  );
}
