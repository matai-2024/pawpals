import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
})

// import { createRoot } from 'react-dom/client'
// import { RouterProvider } from 'react-router-dom'
// import { router } from './routes'
// import App from './App.tsx'

// const root = createRoot(document.getElementById('app') as HTMLElement)
// root.render(<RouterProvider router={router} />)

// Previously we were using <App/>: 
// root.render(<App />) 

// Now we are using <RouterProvider router={router} /> 