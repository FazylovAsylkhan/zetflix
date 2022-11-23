export function formateToHoursAndMinutes(minutes: string): string {
  const h = Math.trunc(Number(minutes) / 60);
  const min = Number(minutes) % 60;

  return `${h}h ${min}min`;
}
