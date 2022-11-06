type ClassName = string | undefined;

// eslint-disable-next-line import/prefer-default-export
export function joinClasses(...arrClass: ClassName[]): string {
  return arrClass.join(' ');
}
