export function getValueYearFrom(date: string): string {
  const [, , year] = date.split('/');
  return year;
}
