import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  return (
    <div className="container">
      <Nav />
      <Outlet />
    </div>
  )
}

export default App
