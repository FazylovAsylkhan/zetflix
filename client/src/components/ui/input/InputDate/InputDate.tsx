import React, { useRef, useState } from 'react';
import { useCatchingOutsideElement } from '../../../../hooks';
import { SelectGroup } from './selectGroup';
import { Input } from '../Input';
import classes from './InputDate.module.scss';

interface InputDateProps {
  id?: string;
  placeholder?: string;
  value: string;
  handlerValueSelectedDate: (value: string) => void;
}

export function InputDate({
  id,
  placeholder,
  handlerValueSelectedDate,
  value,
}: InputDateProps): JSX.Element {
  const { inputDate, button, box } = classes;
  const [isOpened, setIsOpened] = useState(false);
  const refInputElement = useRef(null);
  useCatchingOutsideElement('mousedown', refInputElement, () =>
    setIsOpened(false)
  );

  return (
    <form className={inputDate} ref={refInputElement}>
      <div className={box}>
        <Input
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            e.preventDefault()
          }
        />
        <button
          type="button"
          onClick={() => setIsOpened(!isOpened)}
          className={button}
        />
      </div>
      {isOpened && (
        <SelectGroup handlerValueSelectedDate={handlerValueSelectedDate} />
      )}
    </form>
  );
}
