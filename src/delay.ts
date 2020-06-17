export function delay<T = void>(delayTimeMs: number, value?: T): Promise<T>{
  return new Promise(resolve => {
    setTimeout(() => {
      if (value !== undefined) {
        resolve(value);
      } else {
        resolve();
      }
    }, delayTimeMs);
  })
}
