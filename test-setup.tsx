/* eslint-disable @typescript-eslint/no-explicit-any */

import { beforeEach, expect } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'
import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { routes } from './client/routes.tsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

declare module 'vitest' {
  interface JestAssertion<T = any>
    extends TestingLibraryMatchers<
      ReturnType<typeof expect.stringContaining>,
      T
    > {}
}

beforeEach(cleanup)
expect.extend(matchers)

export function renderApp(path = '/') {
  const user = userEvent.setup()
  const router = createMemoryRouter(routes, {
    initialEntries: [path],
  })

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })
  const screen = render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  )
  return { user, ...screen }
}