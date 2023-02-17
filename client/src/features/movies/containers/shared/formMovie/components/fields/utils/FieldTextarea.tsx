import React from 'react';
import { Label, Textarea } from '@common/components';
import { Message } from '../../message';

interface FieldTextareaProps {
  data: {
    title: string;
    parentClasses: string;
  };
  field: {
    name: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    value: string;
    error: string | undefined;
  };
}

export function FieldTextarea(props: FieldTextareaProps): JSX.Element {
  const { data, field } = props;
  const { name, onChange, onBlur, value, error } = field;
  const { title, parentClasses } = data;

  return (
    <Label id={name} title={title} parentClasses={parentClasses}>
      <Textarea value={value} onChange={onChange} onBlur={onBlur} id={name} />
      {error !== undefined && <Message>{error}</Message>}
    </Label>
  );
}
