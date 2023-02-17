import React, { useState } from 'react';
import { SearchForm } from '../components';
import { useAppDispatch } from '@common/hooks';
import { search } from '@features/movies/services/redux';

export function SearchFormMovie(): JSX.Element {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    dispatch(search(value));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <SearchForm
      stateInput={{ value, setValue: handleChange }}
      onSubmit={handleClick}
    />
  );
}
