// __tests__/basic.test.js

describe('Basic Jest Tests', () => {
  it('should return true', () => {
    expect(true).toBe(true); // Passes if true is equal to true
  });

  it('should be truthy', () => {
    expect(1).toBeTruthy(); // Passes if 1 is truthy
  });

  it('should be falsy', () => {
    expect(null).toBeFalsy(); // Passes if null is falsy
  });
});
