import { calculator } from "./calculator";

describe('Calculator', () => {
  it('should return 10 of (4 + 6)', () => {
    const result = calculator(4, 6);

    expect(result).toEqual(10);
  });

  it('should show a motivational message if result is equal to current year', () => {
    const currentYear = new Date().getFullYear()
    const expectedMessage = `Is ${currentYear}! don't forget your goals`;
    const result = calculator(2022, 2);

    expect(result).toEqual(expectedMessage);
  });
});
