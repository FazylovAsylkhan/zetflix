import type { IDate } from './models';
export type { IDate } from './models';

function getNumericMonth(m: string): string {
  return String(new Date(`${m} 1`).getMonth() + 1);
}

function getNumberOfDaysInMonthFrom(m: string, y: string): number {
  const year = Number(y);
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  switch (m) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      return 31;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      return 30;
    default:
      return isLeapYear ? 29 : 28;
  }
}

export function getCurrentDate(): IDate {
  const [m, d, y] = new Date().toLocaleDateString('en-US').split('/');

  return { y, m, d };
}

function getIsoFormattedValue(n: string): string {
  const number = Number(n);
  const isNaturalNumber = number > 0 && number < 10;
  return isNaturalNumber ? `0${number}` : String(number);
}

export function getFormattedDate(m: string, d: string, y: string): string {
  return [
    y,
    getIsoFormattedValue(getNumericMonth(m)),
    getIsoFormattedValue(d),
  ].join('-');
}

export function getValidatedNameMonth(m: string): string {
  const isNotFullNameMonth = !isNaN(Number(m));
  return isNotFullNameMonth ? getFullNameMonth(m) : m;
}

export function getValidatedValueDay(
  currentListDays: string[],
  currentDay: string
): string {
  const isOverflow = Number(currentDay) > currentListDays.length;

  return isOverflow ? String(currentListDays.length) : currentDay;
}

export function getFullNameMonth(m: string): string {
  const rightOrderNumberOfMonths = Number(m) - 1;
  const date = new Date(Date.UTC(2022, rightOrderNumberOfMonths));

  return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
}

export function getArrDaysFrom(fullNameMonth: string, year: string): string[] {
  const days = [];

  for (let i = 1; i <= getNumberOfDaysInMonthFrom(fullNameMonth, year); i++) {
    days.push(String(i));
  }

  return days;
}

export function getArrYearsFrom(year: string): string[] {
  const arrYears = [];

  for (let i = 0; i <= 100; i++) {
    arrYears.push(String(Number(year) - i));
  }

  return arrYears;
}

export function getArrNamesMonths(): string[] {
  const namesMonths = [];

  for (let i = 1; i < 13; i += 1) {
    namesMonths.push(getFullNameMonth(String(i)));
  }

  return namesMonths;
}
