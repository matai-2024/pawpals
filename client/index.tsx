import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

const root = createRoot(document.getElementById('app') as HTMLElement)
// Previously we were using <App/>: 
// root.render(<App />) 

// Now we are using <RouterProvider router={router} /> 
root.render(<RouterProvider router={router} />)

// import { createRoot } from 'react-dom/client'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// import App from './App.tsx'

// const queryClient = new QueryClient()

// document.addEventListener('DOMContentLoaded', () => {
//   createRoot(document.getElementById('app') as HTMLElement).render(
//     <QueryClientProvider client={queryClient}>
//       <App />
//       <ReactQueryDevtools />
//     </QueryClientProvider>
//   )
// })
