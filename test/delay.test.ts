import { delay } from '../src'

describe('delay', () => {
  test('delay should be defined', () => {
    expect(delay).toBeDefined()
  })
  test('delay 150ms void', () => {
    expect(delay(150)).resolves.toEqual(undefined)
  })
  test('delay 200ms return hello', () => {
    expect(delay(200, 'hello')).resolves.toEqual('hello')
  })
})
