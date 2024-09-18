// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */
import { beforeAll, describe, it, expect } from 'vitest'
import nock from 'nock'
import '@testing-library/jest-dom/vitest'
import { renderApp } from './__tests__/test-setup'

beforeAll(() => {
  nock.disableNetConnect()
})

describe('Home.tsx', async () => {
  it('should display the home title', async () => {
    const screen = renderApp('/')
    const homeTitle = await screen.findByTestId('test title')

    expect(homeTitle).toBeInTheDocument()
    expect(homeTitle.textContent).toBe('Find more friends for your best friend')
  })
})
