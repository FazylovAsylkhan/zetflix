import React, { useEffect, useState } from 'react';
import {
  Dropdown,
  IDropdownItem,
  Input,
  InputDate,
  Label,
  Textarea,
} from '@components/ui';
import { ICard } from '@components/blocks';
import { getListCheckedGenres, getInitialState } from './model';
import { IField, DROPDOWN, INPUT_DATE, INPUT_TEXT, TEXTAREA } from './models';
import classes from './Field.module.scss';

interface FieldProps {
  fieldData: IField;
  data?: ICard;
}

export function Field({ fieldData, data }: FieldProps): JSX.Element {
  const { label } = classes;
  const { componentType, title, defaultGenres, placeholder } = fieldData;
  const [value, setValue] = useState('');
  const [listGenres, setListGenres] = useState(defaultGenres);

  useEffect(() => {
    const isDropdown = data !== undefined && defaultGenres !== undefined;
    if (isDropdown) {
      const listCheckedGenres = getListCheckedGenres(data, defaultGenres);

      setListGenres(listCheckedGenres);
    } else if (data !== undefined) {
      const initialStateField = getInitialState(data, fieldData);

      setValue(initialStateField);
    } else {
      setValue('');
      setListGenres(defaultGenres);
    }
  }, [data, fieldData, defaultGenres]);

  const renderInputText = (): JSX.Element => {
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
  };
  const renderInputDate = (): JSX.Element => {
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
  };
  const renderTextarea = (): JSX.Element => {
    const handleChangingTextarea = (
      e: React.ChangeEvent<HTMLTextAreaElement>
    ): void => {
      setValue(e.target.value);
    };

    return (
      <Label id={title} title={title} parentClasses={label}>
        <Textarea value={value} onChange={handleChangingTextarea} id={title} />
      </Label>
    );
  };
  const renderDropdown = (
    defaultValue: string,
    initialItems: IDropdownItem[]
  ): JSX.Element => {
    return (
      <Label id={title} title={title}>
        <Dropdown initialItems={initialItems} defaultValue={defaultValue} />
      </Label>
    );
  };

  switch (componentType) {
    case INPUT_TEXT:
      return renderInputText();
    case INPUT_DATE:
      return renderInputDate();
    case TEXTAREA:
      return renderTextarea();
    case DROPDOWN:
      if (placeholder !== undefined && listGenres !== undefined) {
        return renderDropdown(placeholder, listGenres);
      }
      throw new Error('Required props dropdown not found');
    default:
      throw new Error('ComponentType not found');
  }
}
