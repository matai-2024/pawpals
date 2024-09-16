// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */

import { beforeEach, beforeAll, describe, it, vi, expect } from 'vitest'
import { renderApp } from '../pages/__tests__/test-setup.tsx'

import nock from 'nock'

const ACCESS_TOKEN = 'mock-access-token'
import { useAuth0 } from '@auth0/auth0-react'
vi.mock('@auth0/auth0-react')

beforeAll(() => {
  nock.disableNetConnect()
})

beforeEach(() => {
  vi.mocked(useAuth0).mockReturnValue({
    isAuthenticated: true,
    user: { sub: 'fake-user@example.org', nickname: 'fake-user' },
    getAccessTokenSilently: vi.fn().mockReturnValue(ACCESS_TOKEN),
    loginWithRedirect: vi.fn(),
    logout: vi.fn(),
  } as any)
})

describe('Nav.tsx', () => {
  it('should render the log out button when signed in', async () => {
    const screen = renderApp('/')
    const result = await screen.getByText('Sign out')

    expect(result.textContent).toMatch('Sign out')
  })

  it('should redirect you to the home page on sign out', async () => {
    const { user, ...screen } = renderApp('/')
    const button = await screen.getByText('Sign out')
    await user.click(button)
    const homeText = await screen.getByText(
      'Find more friends for your best friend',
    )

    expect(homeText).toBeTruthy()
  })
})
