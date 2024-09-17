import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

interface Props {
  handleClick: () => void
}

export default function AccountIcon({ handleClick }: Props) {
  const { user, logout } = useAuth0()
  const navigate = useNavigate()

  const handleSignOut = () => {
    logout()
  }

  const navigation = [
    { name: 'My Profile', handleClick: () => navigate('/user/profile') },
    { name: 'Settings', handleClick: () => navigate('/user/settings') },
    { name: 'Log out', handleClick: handleSignOut },
  ]

  return (
    <section>
      <img
        onClick={handleClick}
        alt={`${user?.name}'s profile`}
        src={`${user?.picture}`}
        className="dropdown-menu relative rounded-full max-w-14 hover:cursor-pointer border-4 p-0.5 border-white"
      ></img>
      <div className="dropdown-content hidden absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
        {navigation.map((item) => (
          <div key={item.name}>
            <a
              onClick={item.handleClick}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 hover:cursor-pointer hover:bg-gray-100"
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
