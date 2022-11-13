import {
  getArrDaysFrom,
  getArrNamesMonths,
  getArrYearsFrom,
  getCurrentDate,
  getFormattedDate,
  getFullNameMonth,
  getValidatedNameMonth,
  getValidatedValueDay,
  IDate,
} from '../model';

export interface UpdatedParametrsProps {
  updatedListDays: string[];
  updatedDay: string;
  updatedSelectedDate: string;
}

export interface InitialParamtersProps {
  initialListNamesMonths: string[];
  initialListYears: string[];
  initialListDays: string[];
  initialValueSelectedMonth: string;
  initialDate: IDate;
}
export function getUpdatedParametrs({ m, d, y }: IDate): UpdatedParametrsProps {
  const fullNameMonth = getValidatedNameMonth(m);
  const updatedListDays = getArrDaysFrom(fullNameMonth, y);
  const updatedDay = getValidatedValueDay(updatedListDays, d);
  const updatedSelectedDate = getFormattedDate(m, updatedDay, y);

  return {
    updatedListDays,
    updatedDay,
    updatedSelectedDate,
  };
}

export function initialParamters(): InitialParamtersProps {
  const { m, y } = getCurrentDate();
  const fullNameCurrentMonth = getFullNameMonth(m);

  return {
    initialDate: getCurrentDate(),
    initialListNamesMonths: getArrNamesMonths(),
    initialListYears: getArrYearsFrom(y),
    initialListDays: getArrDaysFrom(fullNameCurrentMonth, y),
    initialValueSelectedMonth: fullNameCurrentMonth,
  };
}
