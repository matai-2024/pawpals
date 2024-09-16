import { Outlet, useMatches } from 'react-router-dom'
import Nav from './components/Nav.tsx'
import Background from './components/utils/Background.tsx'
import useDocumentTitle from './hooks/use-document-title.ts'

function App() {
  const matches = useMatches()
  const pageTitle = matches[1].handle
  useDocumentTitle(pageTitle ? `${pageTitle}` : 'paw pals.')
  return (
    <div className="container">
      <Nav />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <Background />
        <Outlet />
      </div>
    </div>
  )
}

export default App
