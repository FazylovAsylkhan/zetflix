import React, { useEffect, useMemo, useState } from 'react';
import { IDropdownItem } from '@common/components';
import { INamesField, NamesFields } from '../../models';
import {
  FieldText,
  FieldDropdown,
  FieldTextarea,
  FieldDate,
} from './components';
import { dataFields } from '../../constants';
import classes from './Field.module.scss';

interface FieldProps {
  initialValue: string | IDropdownItem[];
  nameField: INamesField;
}

export function Field(props: FieldProps): JSX.Element {
  const { nameField, initialValue } = props;
  const { label } = classes;
  const isArray = Array.isArray(initialValue);
  const stringInitialValue = useMemo(
    () => (!isArray ? initialValue : ''),
    [initialValue, isArray]
  );
  const arrayInitialValue = useMemo(
    () => (isArray ? initialValue : []),
    [initialValue, isArray]
  );

  const [value, setValue] = useState(stringInitialValue);
  const stateValue = { value, setValue };
  const [initialItems, setInitialItems] = useState(arrayInitialValue);

  useEffect(() => {
    setValue(stringInitialValue);
  }, [stringInitialValue]);

  useEffect(() => {
    setInitialItems(arrayInitialValue);
  }, [arrayInitialValue]);

  switch (nameField) {
    case NamesFields.GENRE:
      return (
        <FieldDropdown
          dataField={dataFields[nameField]}
          listGenres={initialItems}
        />
      );
    case NamesFields.RELEASE_DATE:
      return (
        <FieldDate dataField={dataFields[nameField]} stateValue={stateValue} />
      );
    case NamesFields.OVERVIEW:
      return (
        <FieldTextarea
          parentClasses={label}
          dataField={dataFields[nameField]}
          stateValue={stateValue}
        />
      );
    default:
      return (
        <FieldText dataField={dataFields[nameField]} stateValue={stateValue} />
      );
  }
}
