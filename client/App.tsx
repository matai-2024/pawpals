import { Outlet } from 'react-router-dom'
import Nav from './components/Nav.tsx'
import Background from './components/utils/Background.tsx'

function App() {
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
