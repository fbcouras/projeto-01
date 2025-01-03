const { sum } = require('./calculator');

it('should sum 2 and 2 the result must be 4', () => {
  expect(sum(2, 2)).toBe(4);
});

it('should sum 2 and 2 even and one of them is a string the result must be 4', () => {
  expect(sum('2', 2)).toBe(4);
});

it('should throw an error if what provided is not a number', () => {
  expect(() => {
    sum('', 2);
  }).toThrowError();

  expect(() => {
    sum([2, 2]);
  }).toThrowError();

  expect(() => {
    sum({});
  }).toThrowError();

  expect(() => {
    sum();
  }).toThrowError();
});
