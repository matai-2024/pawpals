import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './App'
import NotFound from './components/NotFound404'
import Home from './pages/Home'
import CreatePet from './pages/CreatePet'
import ProfileList from './pages/ProfileList'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import Events from './pages/Events'
import UserProfile from './pages/UserProfile'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<NotFound />}>
    <Route index element={<Home />} />
    <Route path="create" element={<CreatePet />} />
    <Route path="user-profile" element={<UserProfile />} />
    <Route path="profiles" element={<ProfileList />} />
    <Route path="profiles/:id" element={<Profile />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="events" element={<Events />} />
  </Route>,
)

export const router = createBrowserRouter(routes)
