// math.test.js

const { add, subtract } = require('../math');

describe('Math operations', () => {
  it('should add two numbers', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  it('should subtract two numbers', () => {
    const result = subtract(5, 3);
    expect(result).toBe(2);
  });

  it('should correctly integrate add and subtract', () => {
    const result = subtract(add(7, 3), 2);
    expect(result).toBe(8);
  });
});
