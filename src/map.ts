const DEFALUT_MAP_PARALLEL_NUM = 8;

export function mapLimit<T, V> (
  input: T[],
  limit: number,
  iteratee: (value: T, index: number) => Promise<V>
): Promise<V[]>;
export function mapLimit<T, V> (
  input: T[],
  limit: number,
  iteratee: (value: T) => Promise<V>
): Promise<V[]>;
export function mapLimit<T extends Object, V> (
  input: T[],
  limit: number,
  iteratee: (value: T, key: string) => Promise<V>
): Promise<V[]>;
export function mapLimit<T extends Object, V> (
  input: T[],
  limit: number,
  iteratee: (value: T) => Promise<V>
): Promise<V[]>;

export function mapLimit(input: any, limit: number, iteratee: any) {
  if (!input) {
    return [];
  }

  const isArray = input instanceof Array;

  const count = (() => {
    if (isArray) {
      return input.length;
    }
    let count = 0;
    for (const _ in input) {
      count++;
    }
    return count;
  })();
  if (limit >= count) {
    let arr = [].reduce((accumulator, currentValue) => accumulator.concat(iteratee(currentValue)) ,[]);
  }
}

// export function map<T, V> (
//   input: T[],
//   iteratee: (value: T, index: number) => Promise<V>
// ): Promise<V[]>;
// export function map<T, V> (
//   input: T[],
//   iteratee: (value: T) => Promise<V>
// ): Promise<V[]>;
// export function map<T extends Object, V> (
//   input: T,
//   iteratee: (value: T[keyof T], key: string) => Promise<V>
// );


// export function flatMap<T, V> (
//   input: T[],
//   iteratee: (value: T, index: number) => Promise<V | V[]>
// ): Promise<V[]>;
// export function flatMap<T, V> (
//   input: T[],s
//   iteratee: (value: T) => Promise<V | V[]>
// ): Promise<V[]>;
// export function flatMap<T extends Object, V> (
//   input: T,
//   iteratee: (value: T[keyof T], key: string) => Promise<V | V[]>
// ): Promise<V[]>
// export function flatMap<T extends Object, V> (
//   input: T,
//   iteratee: (value: T[keyof T]) => Promise<V | V[]>
// ): Promise<V[]>
// // enforced by overload signature, validated by tests
// export function flatMap(input: any, iteratee: any) {
// }
