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
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import EventDetails from './pages/EventDetails'
import Events from './pages/Events'
import UserProfile from './pages/UserProfile'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<NotFound />}>
    <Route index element={<Home />} />
    <Route path="create" element={<CreatePet />} />
    <Route path="profiles" element={<ProfileList />} />
    <Route path="profiles/:id" element={<Profile />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="events/:id" element={<EventDetails />} />
    <Route index element={<Home />} handle={'pawpals'} />
    <Route path="about" element={<About />} handle={'About | pawpals'} />
    <Route
      path="create"
      element={<CreatePet />}
      handle={'Add a Pet | pawpals'}
    />
    <Route
      path="user-profile"
      element={<UserProfile />}
      handle={'Create Profile | pawpals'}
    />

    <Route
      path="profiles"
      element={<ProfileList />}
      handle={'Pet Profiles | pawpals'}
    />
    <Route
      path="profiles/:id"
      element={<Profile />}
      handle={`Profile | pawpals`}
    />
    <Route
      path="dashboard"
      element={<Dashboard />}
      handle={'Dashboard | pawpals'}
    />
    <Route path="events" element={<Events />} handle={'Events | pawpals'} />
  </Route>,
)

export const router = createBrowserRouter(routes)
