const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Fernando',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Fernando&profession=developer');
  });

  it('should create a valid query string when an array is provided', () => {
    const obj = {
      name: 'Fernando',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Fernando&abilities=JS,TDD');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Fernando',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to an object', () => {
    const qs = 'name=Fernando&profession=developer';
    expect(parse(qs)).toEqual({
      name: 'Fernando',
      profession: 'developer',
    });
  });

  it('should convert a query string of a single key-value pair to an object', () => {
    const qs = 'name=Fernando';
    expect(parse(qs)).toEqual({
      name: 'Fernando',
    });
  });

  it('should convert a query string when an object tanking care of comma separated values', () => {
    const qs = 'name=Fernando&abilities=JS,TDD';

    expect(parse(qs)).toEqual({ name: 'Fernando', abilities: ['JS', 'TDD'] });
  });
});
