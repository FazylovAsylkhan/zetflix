import React, { useState } from 'react';
import { Select } from '../../../select';
import { getUpdatedParametrs, initialParamters } from '../controller';
import classes from './SelectGroup.module.scss';

interface SelectGroupProps {
  handlerValueSelectedDate: (value: string) => void;
}

export function SelectGroup({
  handlerValueSelectedDate,
}: SelectGroupProps): JSX.Element {
  const { selectGroup } = classes;

  const {
    initialDate,
    initialListDays,
    initialListNamesMonths: listMonths,
    initialListYears: listYears,
    initialValueSelectedMonth: m,
  } = initialParamters();

  const [date, setDate] = useState(initialDate);
  const [listDays, setListDays] = useState(initialListDays);
  const { d, y } = date;

  const [valueSelectedDay, setValueSelectedDay] = useState(d);
  const [valueSelectedMonth, setValueSelectedMonth] = useState(m);
  const [valueSelectedYear, setValueSelectedYear] = useState(y);

  const handleClickSelectDay = (valueSelectedOption: string): void => {
    const { updatedSelectedDate } = getUpdatedParametrs({
      ...date,
      d: valueSelectedOption,
    });

    setDate({ ...date, d: valueSelectedOption });
    handlerValueSelectedDate(updatedSelectedDate);

    setValueSelectedDay(valueSelectedOption);
  };

  const handleClickSelectMonth = (valueSelectedOption: string): void => {
    const { updatedDay, updatedListDays, updatedSelectedDate } =
      getUpdatedParametrs({ ...date, m: valueSelectedOption });

    setDate({ ...date, d: updatedDay, m: valueSelectedOption });
    setListDays(updatedListDays);
    setValueSelectedDay(updatedDay);
    handlerValueSelectedDate(updatedSelectedDate);

    setValueSelectedMonth(valueSelectedOption);
  };

  const handleClickSelectYear = (valueSelectedOption: string): void => {
    const { updatedDay, updatedListDays, updatedSelectedDate } =
      getUpdatedParametrs({ ...date, y: valueSelectedOption });

    setDate({ ...date, d: updatedDay, y: valueSelectedOption });
    setListDays(updatedListDays);
    setValueSelectedDay(updatedDay);
    handlerValueSelectedDate(updatedSelectedDate);

    setValueSelectedYear(valueSelectedOption);
  };

  return (
    <div className={selectGroup}>
      <Select
        label="Day:"
        value={valueSelectedDay}
        handlerClick={handleClickSelectDay}
        arrOptions={listDays}
      />
      <Select
        label="Month:"
        value={valueSelectedMonth}
        handlerClick={handleClickSelectMonth}
        arrOptions={listMonths}
      />
      <Select
        label="Year:"
        value={valueSelectedYear}
        handlerClick={handleClickSelectYear}
        arrOptions={listYears}
      />
    </div>
  );
}
