const stringLength = require('./stringLength.js');

test('stringLength("Stadium") should return number', () => {
  expect(typeof stringLength('letter')).toBe('number');
})
it('stringLength("") should return "Letter should be equal or greater than 1"', () => {
  expect(stringLength('')).toEqual('Letter should be equal or greater than 1');
})
it('stringLength("Match day at the stadium") should return "Letter should be equal or less than 10"', () => {
  expect(stringLength('Match day at the stadium')).toEqual("Letter should be equal or less than 10");
})
it('stringLength("Imagine") should return 7', () => {
  expect(stringLength('Imagine')).toBe(7);
})
it('stringLength("Bite") should return 4', () => {
  expect(stringLength('Bite')).toBe(4);
})
it('stringLength("Liverpool") should return 9', () => {
  expect(stringLength('Liverpool')).toBe(9);
})