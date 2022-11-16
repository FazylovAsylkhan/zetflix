import React, { useEffect, useState } from 'react';
import { Dropdown, Input, InputDate, Label, Textarea } from 'components/ui';
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
  const { componentType, title, defaultGenres, placeholder } = fieldData;
  const [value, setValue] = useState('');
  const [listGenres, setListGenres] = useState(defaultGenres);

  useEffect(() => {
    const isDropdownField = data !== undefined && defaultGenres !== undefined;

    if (isDropdownField) {
      setListGenres(getListCheckedGenres(data, defaultGenres));
    } else if (data !== undefined) {
      setValue(getInitialState(data, fieldData));
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

  switch (componentType) {
    case INPUT_TEXT:
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
    case INPUT_DATE:
      return (
        <Label id={title} title={title}>
          <InputDate
            value={value}
            onChange={handleChangingInputDate}
            placeholder={placeholder}
          />
        </Label>
      );
    case TEXTAREA:
      return (
        <Label id={title} title={title} parentClasses={label}>
          <Textarea
            value={value}
            onChange={handleChangingTextarea}
            id={title}
          />
        </Label>
      );
    case DROPDOWN:
      if (placeholder !== undefined && listGenres !== undefined) {
        return (
          <Label id={title} title={title}>
            <Dropdown initialItems={listGenres} defaultValue={placeholder} />
          </Label>
        );
      } else {
        throw new Error('Required props dropdown not found');
      }
    default:
      throw new Error('ComponentType not found');
  }
}
