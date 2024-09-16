import { useAuth0 } from '@auth0/auth0-react'

export default function AccountIcon() {
  const { user, logout } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  function handleClick() {
    const dropdowns = document.querySelector('.dropdown-content')
    if (dropdowns?.classList.contains('hidden')) {
      dropdowns.classList.remove('hidden')
    } else {
      dropdowns?.classList.add('hidden')
    }
  }

  return (
    <div>
      <img
        onClick={handleClick}
        src={`${user?.picture}`}
        className="relative rounded-full max-w-11"
      ></img>
      <div className="absolute right-5 dropdown-content hidden mt-2 p-2 text-gray-600 border-2">
        <a className="" onClick={handleSignOut}>
          Log out
        </a>
      </div>
    </div>
  )
}
