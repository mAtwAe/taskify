// __tests__/async.test.js

describe('Async Tests', () => {
  it('should resolve with a value', async () => {
    const promise = Promise.resolve('Hello');
    await expect(promise).resolves.toBe('Hello'); // Passes if the promise resolves to 'Hello'
  });

  it('should reject with an error', async () => {
    const promise = Promise.reject(new Error('Something went wrong'));
    await expect(promise).rejects.toThrow('Something went wrong'); // Passes if the promise rejects with the expected error
  });
});
