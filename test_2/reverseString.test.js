const reverseString = require('./reverseString');

test('returns murd', () => {
  expect(reverseString('drum')).toBe('murd');
});