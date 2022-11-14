import React, { useState } from 'react';
import { Textarea, Input, Label, Dropdown, InputDate } from '../../../../../ui';
import { IField, DROPDOWN, INPUT_DATE, INPUT_TEXT, TEXTAREA } from './models';
import classes from './Field.module.scss';

interface fieldProps {
  data: IField;
}

export function Field({ data }: fieldProps): JSX.Element {
  const { label } = classes;
  const { componentType, title, placeholder, initialItems } = data;
  const parentClassname = componentType === TEXTAREA ? label : '';
  const isHadRequiredPropsDropdown =
    placeholder !== undefined && initialItems !== undefined;
  let FieldComponent = <div />;

  const [value, setValue] = useState('');

  const handleChangingInputText = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setValue(e.target.value);
  };

  const handleChangingTextarea = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setValue(e.target.value);
  };

  const handleChangingInputDate = (valueSelectedDate: string): void => {
    setValue(valueSelectedDate);
  };

  switch (componentType) {
    case INPUT_TEXT:
      FieldComponent = (
        <Input
          value={value}
          onChange={handleChangingInputText}
          id={title}
          placeholder={placeholder}
        />
      );
      break;
    case INPUT_DATE:
      FieldComponent = (
        <InputDate
          value={value}
          onChange={handleChangingInputDate}
          placeholder={placeholder}
        />
      );
      break;
    case TEXTAREA:
      FieldComponent = (
        <Textarea value={value} onChange={handleChangingTextarea} id={title} />
      );
      break;
    case DROPDOWN:
      if (isHadRequiredPropsDropdown) {
        FieldComponent = (
          <Dropdown initialItems={initialItems} defaultValue={placeholder} />
        );
      } else {
        throw new Error('Required props dropdown not found');
      }
      break;
    default:
      throw new Error('ComponentType not found');
  }

  return (
    <Label id={title} title={title} parentClasses={parentClassname}>
      {FieldComponent}
    </Label>
  );
}
