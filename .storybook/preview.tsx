import type { Preview } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import React from 'react'
import '../public/output.css'
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.min.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const withProviders = (Story: any) => (
  <MemoryRouter>
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  </MemoryRouter>
)

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withProviders],
}

export default preview
