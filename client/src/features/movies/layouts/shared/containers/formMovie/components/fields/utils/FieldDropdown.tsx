import React, { useEffect, useState } from 'react';
import { Dropdown, Label } from '@common/components';
import { Message } from '../../message';
import { IFormErrors, NamesFields } from '../../../models';

interface FieldDropdownProps {
  data: {
    title: string;
    label: string;
    options: string[];
  };
  field: {
    name: string;
    value: string;
    error: string | undefined;
  };
  form: {
    setFieldValue: (
      field: string,
      value: string,
      shouldValidate?: boolean | undefined
    ) => Promise<void> | Promise<IFormErrors>;
  };
}

export function FieldDropdown(props: FieldDropdownProps): JSX.Element {
  const { data, field, form } = props;
  const { title, label, options } = data;
  const { name, value, error } = field;
  const { setFieldValue } = form;

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  useEffect(() => {
    const genres = value.split(',');
    setSelectedGenres(genres);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedGenre = e.target.value;
    const genres = value.split(',');
    const hasSelectedGenre = genres.includes(selectedGenre);

    if (hasSelectedGenre) {
      const updatedGenres = genres.filter((genre) => genre !== selectedGenre);
      void setFieldValue(NamesFields.GENRE, updatedGenres.join(','));
    } else {
      const updatedGenres = [...genres, selectedGenre];
      void setFieldValue(NamesFields.GENRE, updatedGenres.join(','));
    }
  };

  return (
    <Label id={name} title={title}>
      <Dropdown
        name={name}
        value={selectedGenres}
        label={label}
        onChange={handleChange}
        options={options}
      />
      {error !== undefined && <Message>{error}</Message>}
    </Label>
  );
}
