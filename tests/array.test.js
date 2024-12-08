// __tests__/array.test.js

describe('Array Tests', () => {
  it('should include an element', () => {
    const arr = [1, 2, 3];
    expect(arr).toContain(2); // Passes if the array contains 2
  });

  it('should have correct length', () => {
    const arr = [1, 2, 3];
    expect(arr).toHaveLength(3); // Passes if the array has a length of 3
  });

  it('should be an array', () => {
    const arr = [1, 2, 3];
    expect(Array.isArray(arr)).toBe(true); // Passes if arr is an array
  });
});
