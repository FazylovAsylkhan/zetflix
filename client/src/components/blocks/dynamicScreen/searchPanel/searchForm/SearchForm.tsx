import React, { useState } from 'react';
import { Input, Button, H2 } from '@components/ui';
import classes from './SearchForm.module.scss';

export function SearchForm(): JSX.Element {
  const { searchForm, h2, wrapper, input } = classes;

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
  };
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <form className={searchForm}>
      <H2 stylesType="primary" parentClasses={h2}>
        Find your movie
      </H2>
      <div className={wrapper}>
        <Input
          onChange={handleChange}
          value={value}
          placeholder="What do you want to watch?"
          parentClasses={input}
        />
        <Button stylesType="primary" type="submit" onClick={handleClick}>
          search
        </Button>
      </div>
    </form>
  );
}
