import React from 'react';
import { Label, Textarea } from '@common/components';

interface FieldTextareaProps {
  dataField: {
    title: string;
  };
  stateValue: {
    value: string;
    setValue: (value: string) => void;
  };
  parentClasses: string;
}

export function FieldTextarea(props: FieldTextareaProps): JSX.Element {
  const { stateValue, parentClasses, dataField } = props;
  const { title } = dataField;
  const { value, setValue } = stateValue;

  const handleChangingTextarea = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setValue(e.target.value);
  };

  return (
    <Label id={title} title={title} parentClasses={parentClasses}>
      <Textarea value={value} onChange={handleChangingTextarea} id={title} />
    </Label>
  );
}
