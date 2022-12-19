import React from 'react';
import { Dropdown, IDropdownItem, Label } from '@common/components';

interface FieldDropdownProps {
  dataField: {
    title: string;
    placeholder: string;
  };
  listGenres: IDropdownItem[];
}

export function FieldDropdown(props: FieldDropdownProps): JSX.Element {
  const { listGenres, dataField } = props;
  const { title, placeholder } = dataField;

  return (
    <Label id={title} title={title}>
      <Dropdown initialItems={listGenres} defaultValue={placeholder} />
    </Label>
  );
}
