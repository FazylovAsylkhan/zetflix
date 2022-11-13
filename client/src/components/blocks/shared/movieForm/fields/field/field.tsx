import React, { useState } from 'react';
import {
  INPUT_TEXT,
  INPUT_DATE,
  TEXTAREA,
  DROPDOWN,
} from '../../../../../../assets/data';
import { Textarea, Input, Label, Dropdown, InputDate } from '../../../../../ui';
import { IField } from '../models';
import classes from './Field.module.scss';

interface fieldProps {
  field: IField;
}

export function Field({ field }: fieldProps): JSX.Element {
  const { label } = classes;
  const { componentType, title, placeholder, initialItems } = field;
  const parentClassname = componentType === TEXTAREA ? label : '';
  const isHadRequiredPropsDropdown =
    placeholder !== undefined && initialItems !== undefined;
  let FieldComponent = <div />;

  const [value, setValue] = useState('');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleChangeTextarea = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setValue(e.target.value);
  };

  const handleValueSelectedDate = (valueSelectedDate: string): void => {
    setValue(valueSelectedDate);
  };

  switch (componentType) {
    case INPUT_TEXT:
      FieldComponent = (
        <Input
          value={value}
          onChange={handleChangeInput}
          id={title}
          placeholder={placeholder}
        />
      );
      break;
    case INPUT_DATE:
      FieldComponent = (
        <InputDate
          value={value}
          handlerValueSelectedDate={handleValueSelectedDate}
          placeholder={placeholder}
        />
      );
      break;
    case TEXTAREA:
      FieldComponent = (
        <Textarea value={value} onChange={handleChangeTextarea} id={title} />
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
