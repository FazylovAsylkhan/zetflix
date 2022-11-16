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

export interface UpdatedParametersProps {
  updatedListDays: string[];
  updatedDay: string;
  updatedSelectedDate: string;
}

export interface InitialParametersProps {
  initialListNamesMonths: string[];
  initialListYears: string[];
  initialListDays: string[];
  initialValueSelectedMonth: string;
  initialDate: IDate;
}
export function getUpdatedParameters({
  m,
  d,
  y,
}: IDate): UpdatedParametersProps {
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

export function initialParameters(): InitialParametersProps {
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
