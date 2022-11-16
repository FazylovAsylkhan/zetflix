type ClassName = string | undefined;

export function joinClasses(...arrClass: ClassName[]): string {
  return arrClass.join(' ');
}
