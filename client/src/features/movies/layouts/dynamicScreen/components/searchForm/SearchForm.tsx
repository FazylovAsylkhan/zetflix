import React from 'react';
import { Input, Button, H2 } from '@common/components';
import classes from './SearchForm.module.scss';

interface SearchFormProps {
  stateInput: {
    value: string;
    setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function SearchForm({
  stateInput,
  onSubmit,
}: SearchFormProps): JSX.Element {
  const { value, setValue } = stateInput;
  const { searchForm, h2, wrapper, input } = classes;

  return (
    <form className={searchForm} onSubmit={(e) => onSubmit(e)}>
      <H2 stylesType="primary" parentClasses={h2}>
        Find your movie
      </H2>
      <div className={wrapper}>
        <Input
          onChange={setValue}
          value={value}
          name="search"
          placeholder="What do you want to watch?"
          parentClasses={input}
        />
        <Button stylesType="primary" type="submit">
          search
        </Button>
      </div>
    </form>
  );
}
