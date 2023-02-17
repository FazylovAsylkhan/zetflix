import React, { useRef, useState } from 'react';
import { useCatchingEventOutsideElement } from '@common/hooks';
import { SelectGroup } from './selectGroup';
import classes from './InputDate.module.scss';
import { Button } from '@common/components/button';
import { Input } from '../Input';

interface InputDateProps {
  placeholder?: string;
  onChange: React.FormEventHandler<HTMLInputElement>;
  name: string;
  value: string;
  handlerValueSelectedDate: (date: string) => void;
}

export function InputDate(props: InputDateProps): JSX.Element {
  const { placeholder, onChange, name, value, handlerValueSelectedDate } =
    props;
  const { inputDate, box } = classes;
  const [isOpened, setIsOpened] = useState(false);
  const refInputElement = useRef(null);

  useCatchingEventOutsideElement('mousedown', refInputElement, () =>
    setIsOpened(false)
  );

  return (
    <div className={inputDate} ref={refInputElement}>
      <div className={box}>
        <Input
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        <Button
          id={name}
          stylesType="date"
          onClick={() => setIsOpened(!isOpened)}
        />
      </div>
      {isOpened && (
        <SelectGroup handlerValueSelectedDate={handlerValueSelectedDate} />
      )}
    </div>
  );
}
