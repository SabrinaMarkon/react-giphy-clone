// Set up Jest to mock Axios.

/*
mockResolvedValue:

Syntactic sugar function for:
jest.fn().mockImplementation(() => Promise.resolve(value));

Useful to mock async functions in async tests:
test('async test', async () => {
  const asyncMock = jest.fn().mockResolvedValue(43);

  await asyncMock(); // 43
});
*/
export default {
    get: jest.fn().mockResolvedValue({ data: {} })
    // post: jest.fn().mockResolvedValue({})
};

