import React, { useEffect, useState } from 'react';
import { Textarea, Input, Label, Dropdown, InputDate } from 'components/ui';
import { getListCheckedGenres, getInitialState } from './model';
import { IField, DROPDOWN, INPUT_DATE, INPUT_TEXT, TEXTAREA } from './models';
import { ICard } from 'components/blocks/collectionMovies/cards/card';
import classes from './Field.module.scss';

interface FieldProps {
  fieldData: IField;
  data?: ICard;
}

export function Field({ fieldData, data }: FieldProps): JSX.Element {
  const { label } = classes;
  const { componentType, title, placeholder, defaultGenres } = fieldData;
  const parentClassname = componentType === TEXTAREA ? label : '';

  const [value, setValue] = useState('');
  const [listGenres, setListGenres] = useState(defaultGenres);

  useEffect(() => {
    if (data !== undefined) {
      setValue(getInitialState(data, fieldData));
      if (defaultGenres !== undefined) {
        setListGenres(getListCheckedGenres(data, defaultGenres));
      }
    } else {
      setValue('');
      setListGenres(defaultGenres);
    }
  }, [data, fieldData, defaultGenres]);

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

  let FieldComponent: JSX.Element;

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
      if (placeholder !== undefined && listGenres !== undefined) {
        FieldComponent = (
          <Dropdown initialItems={listGenres} defaultValue={placeholder} />
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
