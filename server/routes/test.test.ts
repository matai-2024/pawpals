import { describe, it, expect } from 'vitest'

describe('test test', () => {
  it('is a test', () => {
    const id = 1

    const testRes = id

    expect(testRes).toBe(id)
  })
})
