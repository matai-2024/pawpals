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
import CreateEvent from './pages/CreateEvent'
import EventList from './pages/EventList'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<NotFound />}>
    <Route index element={<Home />} />
    <Route path="signup" element={<Signup />} />
    <Route path="profiles" element={<ProfileList />} />
    <Route path="profiles/:id" element={<Profile />} />
    <Route path="events" element={<EventList />} />
    <Route path="events/create" element={<CreateEvent />} />
  </Route>,
)

export const router = createBrowserRouter(routes)
