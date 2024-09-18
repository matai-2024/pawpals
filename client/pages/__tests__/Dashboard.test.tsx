// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */

import { beforeEach, describe, it, vi, expect } from 'vitest'
import { renderApp } from './test-setup' // Adjust this import based on your setup
import { useAuth0 } from '@auth0/auth0-react'

// Mocking @auth0/auth0-react
vi.mock('@auth0/auth0-react')
const ACCESS_TOKEN = 'mock-access-token'

beforeEach(() => {
  vi.mocked(useAuth0).mockReturnValue({
    isAuthenticated: true,
    user: { sub: 'fake-user-id' },
    getAccessTokenSilently: vi.fn().mockResolvedValue(ACCESS_TOKEN),
    loginWithRedirect: vi.fn(),
    logout: vi.fn(),
  } as any)
})

describe('Dashboard', () => {
  it('Renders the Dashboard component', async () => {
    const screen = renderApp('/dashboard') // Adjust if necessary

    // Verify that key elements are present
    expect(
      screen.getByRole('heading', { name: /My Pets/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /My Schedule/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /My Events/i }),
    ).toBeInTheDocument()

    // Use specific queries for buttons or other elements
    expect(screen.getByRole('button', { name: /Add Pet/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /See more events/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Add Event/i }),
    ).toBeInTheDocument()
  })
})
