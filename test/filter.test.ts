import { filter } from '../src/filter';

describe('filter', () => {
  test('filter should be defined', () => {
    expect(filter).toBeDefined();
  })
  test('filter empty to empty', () => {
    expect(filter({}, (v: any) => {return Promise.resolve(v)})).resolves.toEqual([])
  })
  test('filter even numbers', () => {
    const arr = [1, 2, 3, 4, 5];
    const predicate = (value: number) => Promise.resolve(value % 2 === 0)
    expect(filter(arr, predicate)).resolves.toEqual([2, 4]);
  })
})
