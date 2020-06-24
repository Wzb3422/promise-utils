export function filter<T, V> (
  input: readonly T[],
  predicate: (value: T, index: number) => Promise<V>
): Promise<T[]>;
export function filter<T, V> (
  input: readonly T[],
  predicate: (value: T) => Promise<V>
): Promise<T[]>;
export function filter<T extends Object, V> (
  input: T,
  predicate: (value: T[keyof T], key: keyof T) => Promise<V>
): Promise<T[keyof T][]>;
export function filter<T extends Object, V> (
  input: T,
  predicate: (value: T[keyof T]) => Promise<V>
): Promise<T[keyof T][]>;
// enforced by overload signature, validated by tests
export function filter(input: any, predicate: any): any {
  return new Promise ((resolve, reject) => {
    if (!input) {
      return [];
    }
    const result: any[] = [];
    for (let k in input) {
      predicate(input[k]).then((truth: boolean) => {
        if (truth) {
          result.push(input[k]);
        }
      })
    }
    return result;
  })
}
