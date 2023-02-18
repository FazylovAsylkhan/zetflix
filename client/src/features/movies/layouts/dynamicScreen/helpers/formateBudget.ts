export function formateBudget(n: number): string {
  const formattedArrValue = String(n)
    .split('')
    .map((s, i) => {
      const orderS = i + 1;
      if (orderS % 3 === 0) {
        return s + ' ';
      }

      return s;
    });

  return '$' + formattedArrValue.join('');
}
