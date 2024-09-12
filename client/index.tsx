import { RouterProvider } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { router } from './routes'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    domain={import.meta.env.VITE_AUTH0_DOMAIN as string}
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID as string}
    cacheLocation="localstorage"
    authorizationParams={{
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      audience: import.meta.env.VITE_AUTH0_AUDIENCE as string,
      redirect_uri: window.location.origin,
    }}
  >
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>,
  </Auth0Provider>
  )
})
