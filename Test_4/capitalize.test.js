const capitalize = require('./capitalize.js');

it('capitalize(1) should return "Your input should be a string"', () => {
    expect(capitalize(1)).toEqual('Your input should be a string');
})
it('capitalize("boy") should return string', () => {
    expect(typeof capitalize("boy")).toBe('string');
})
it('capitalize("new") should return "New"', () => {
    expect(capitalize("new")).toBe('New');
})
it('capitalize("Drum") should return "Drum"', () => {
    expect(capitalize("Drum")).toBe('Drum');
})