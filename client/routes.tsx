import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './App'
import NotFound from './components/NotFound404'
import Home from './pages/Home'
import Signup from './pages/Signup'
import ProfileList from './pages/ProfileList'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import EventList from './pages/EventList'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<NotFound />}>
    <Route index element={<Home />} />
    <Route path="signup" element={<Signup />} />
    <Route path="profiles" element={<ProfileList />} />
    <Route path="profiles/:id" element={<Profile />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="events" element={<EventList />} />
  </Route>,
)

export const router = createBrowserRouter(routes)
