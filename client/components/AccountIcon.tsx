import { useAuth0 } from '@auth0/auth0-react'

export default function AccountIcon() {
  const { user } = useAuth0()
  function handleClick(e) {
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
        onClick={(e) => handleClick(e)}
        src={`${user?.picture}`}
        className="rounded-full max-w-11"
      ></img>
      <div className="dropdown-content hidden">
        <a href="#">Log out</a>
      </div>
    </div>
  )
}
