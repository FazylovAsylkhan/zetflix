export function formateToHoursAndMinutes(minutes: number): string {
  const h = Math.trunc(minutes / 60);
  const min = minutes % 60;

  return `${h}h ${min}min`;
}
