import React, { useContext, useState } from 'react';
import { MovieContext } from '@features/movies/context';
import { SearchForm } from '../components';

export function SearchFormMovie(): JSX.Element {
  const [value, setValue] = useState('');
  const MovieCtx = useContext(MovieContext);

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    MovieCtx?.stateSearchParams.setSearchParams(`search=${value}`);
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
