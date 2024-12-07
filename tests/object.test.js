// __tests__/object.test.js

describe('Object Tests', () => {
  it('should have a specific property', () => {
    const obj = { name: 'John', age: 30 };
    expect(obj).toHaveProperty('name'); // Passes if the object has the 'name' property
  });

  it('should return correct property value', () => {
    const obj = { name: 'John', age: 30 };
    expect(obj).toHaveProperty('age', 30); // Passes if the 'age' property equals 30
  });
});
