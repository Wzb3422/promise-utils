export function delay<T>(delayTimeMs: number, value?: T): Promise<T>{
  return new Promise(resolve => {
    setTimeout(() => {
      value !== undefined ? resolve(value) : resolve();
    }, delayTimeMs);
  })
}
