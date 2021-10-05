import {validateFin} from './Core'

test('validateFin/negative size', () => {
  expect(() => validateFin({size:-1,value:0})).toThrow();
});

test('validateFin/negative value', () => {
  expect(() => validateFin({size:0,value:-1})).toThrow();
});

test('validateFin/value too big', () => {
  expect(() => validateFin({size:3,value:9})).toThrow();
});

test('validateFin/ok', () => {
  expect(() => validateFin({size:3,value:2})).not.toThrow();
});
