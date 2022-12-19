import React from 'react';
import { Input, Label } from '@common/components';

interface FieldTextProps {
  dataField: {
    title: string;
    placeholder: string;
  };
  stateValue: {
    value: string;
    setValue: (value: string) => void;
  };
}

export function FieldText(props: FieldTextProps): JSX.Element {
  const { dataField, stateValue } = props;
  const { title, placeholder } = dataField;
  const { value, setValue } = stateValue;

  const handleChangingInputText = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setValue(e.target.value);
  };

  return (
    <Label id={title} title={title}>
      <Input
        value={value}
        onChange={handleChangingInputText}
        id={title}
        placeholder={placeholder}
      />
    </Label>
  );
}
