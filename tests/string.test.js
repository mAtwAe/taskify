// __tests__/string.test.js

describe('String Operations', () => {
  it('should contain a substring', () => {
    expect('Hello World').toContain('World'); // Passes if 'Hello World' contains 'World'
  });

  it('should have a specific length', () => {
    expect('Hello').toHaveLength(5); // Passes if 'Hello' has a length of 5
  });

  it('should convert to uppercase', () => {
    expect('hello'.toUpperCase()).toBe('HELLO'); // Passes if 'hello' converts to 'HELLO'
  });
});
