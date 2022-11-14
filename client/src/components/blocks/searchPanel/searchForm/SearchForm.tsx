import React, { useState } from 'react';
import {
  Input,
  Button,
  BUTTON_TYPE_SUBMIT,
  CLASSNAME_PRIMARY,
} from '../../../ui';
import classes from './SearchForm.module.scss';

interface SearchFormProps {
  id: string;
}

function SearchForm({ id }: SearchFormProps): JSX.Element {
  const { searchForm } = classes;
  const [value, setValue] = useState('');

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <form className={searchForm}>
      <Input
        id={id}
        value={value}
        className="search"
        placeholder="What do you want to watch?"
        onChange={handleChange}
      />
      <Button
        stylesType={CLASSNAME_PRIMARY}
        type={BUTTON_TYPE_SUBMIT}
        onClick={handleClick}>
        search
      </Button>
    </form>
  );
}

export default SearchForm;
