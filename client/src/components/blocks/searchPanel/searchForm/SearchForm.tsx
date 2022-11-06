import React, { useState } from 'react';
import {
  Heading,
  Input,
  Button,
  CLASSNAME_H2,
  BUTTON_TYPE_SUBMIT,
  CLASSNAME_PRIMARY,
} from '../../../ui';
import classes from './SearchForm.module.scss';

function SearchForm(): JSX.Element {
  const { searchForm, controller, title } = classes;
  const [value, setValue] = useState('');

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <form className={searchForm}>
      <Heading stylesType={CLASSNAME_H2} parentClasses={title}>
        Find your movie
      </Heading>
      <div className={controller}>
        <Input
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
      </div>
    </form>
  );
}

export default SearchForm;
