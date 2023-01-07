import React from 'react';
import { Input, Label } from '@common/components';
import { Message } from '../../message';

interface FieldTextProps {
  field: {
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    value: string;
    error: string | undefined;
  };
  data: {
    title: string;
    placeholder: string;
  };
}

export function FieldText(props: FieldTextProps): JSX.Element {
  const { field, data } = props;
  const { name, onChange, onBlur, value, error } = field;
  const { title, placeholder } = data;

  return (
    <Label id={name} title={title}>
      <Input
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error !== undefined && <Message>{error}</Message>}
    </Label>
  );
}
