import React, { useState } from 'react';
import { Select } from '@common/components';
import { getUpdatedParameters, initialParameters } from '../controller';
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
  } = initialParameters();

  const [date, setDate] = useState(initialDate);
  const [listDays, setListDays] = useState(initialListDays);
  const { d, y } = date;

  const dataDay = {
    labelText: 'Day:',
    listOptions: listDays,
  };
  const dataMonth = {
    labelText: 'Month:',
    listOptions: listMonths,
  };
  const dataYear = {
    labelText: 'Year:',
    listOptions: listYears,
  };

  const [valueSelectedDay, setValueSelectedDay] = useState(d);
  const [valueSelectedMonth, setValueSelectedMonth] = useState(m);
  const [valueSelectedYear, setValueSelectedYear] = useState(y);

  const handleClickSelectDay = (valueSelectedOption: string): void => {
    const { updatedSelectedDate } = getUpdatedParameters({
      ...date,
      d: valueSelectedOption,
    });

    setDate({ ...date, d: valueSelectedOption });
    handlerValueSelectedDate(updatedSelectedDate);

    setValueSelectedDay(valueSelectedOption);
  };

  const handleClickSelectMonth = (valueSelectedOption: string): void => {
    const { updatedDay, updatedListDays, updatedSelectedDate } =
      getUpdatedParameters({ ...date, m: valueSelectedOption });

    setDate({ ...date, d: updatedDay, m: valueSelectedOption });
    setListDays(updatedListDays);
    setValueSelectedDay(updatedDay);
    handlerValueSelectedDate(updatedSelectedDate);

    setValueSelectedMonth(valueSelectedOption);
  };

  const handleClickSelectYear = (valueSelectedOption: string): void => {
    const { updatedDay, updatedListDays, updatedSelectedDate } =
      getUpdatedParameters({ ...date, y: valueSelectedOption });

    setDate({ ...date, d: updatedDay, y: valueSelectedOption });
    setListDays(updatedListDays);
    setValueSelectedDay(updatedDay);
    handlerValueSelectedDate(updatedSelectedDate);

    setValueSelectedYear(valueSelectedOption);
  };

  return (
    <div className={selectGroup}>
      <Select
        data={dataDay}
        value={valueSelectedDay}
        onClick={handleClickSelectDay}
      />
      <Select
        data={dataMonth}
        value={valueSelectedMonth}
        onClick={handleClickSelectMonth}
      />
      <Select
        data={dataYear}
        value={valueSelectedYear}
        onClick={handleClickSelectYear}
      />
    </div>
  );
}
