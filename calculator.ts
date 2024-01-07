export function calculator(x: number, y: number): number | string {
  const currentYear = new Date().getFullYear();
  const sum = x + y;

  return sum === currentYear
    ? `Is ${currentYear}! don't forget your goals`
    : sum;
}
