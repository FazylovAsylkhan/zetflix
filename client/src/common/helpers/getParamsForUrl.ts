export function getNormalizedParams(...params: string[]): string {
  const normalizedParams = params.filter((param) => param !== '');
  return `?${normalizedParams.join('&')}`;
}
