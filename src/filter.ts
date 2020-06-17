export function filter<T, V>(
  input: T[],
  predicate: (value: T, index?: number
) => Promise<V>): Promise<T[]>;
export function filter<T, V>(
  input: T,
  predicate: (value: T[keyof T], key: keyof T) => Promise<V>
): Promise<T[keyof T][]> {
  if (!input) {
    Promise.resolve([])
  } 
}