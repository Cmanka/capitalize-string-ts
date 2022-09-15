import { capitalizeWord, capitalizeString } from '../index';

test('Capitalize Word', () => {
  expect(capitalizeWord('string')).toBe('String');
});

test('Capitalize string', () => {
  expect(capitalizeString('letter word')).toBe('Letter word');
  expect(capitalizeString('letter word', { isUppercaseAll: true })).toBe('Letter Word');
  expect(capitalizeString('letter,   word', { isUppercaseAll: true, separator: ',' })).toBe('Letter,   Word');
});
