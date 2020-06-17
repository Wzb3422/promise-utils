import { filter } from '../src';

describe('filter', () => {
  test('filter should be defined', () => {
    expect(filter).toBeDefined();
  })
  test('filter even numbers', () => {
    const arr = [1, 2, 3, 4, 5];
    const predicate = (value: number) => value % 2 === 0
    expect(filter(arr, predicate)).resolves.toEqual([2, 4]);
  })
  test('filter items whose index is even', () => {
    const arr = [1, 2, 3, 4, 5];
    const predicate = (value: number, index: number) => index % 2 === 0;
    expect(filter(arr, predicate)).toEqual([1, 3, 5]);
  })
})
