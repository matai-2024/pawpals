import { useAuth0 } from '@auth0/auth0-react'

export default function AccountIcon() {
  const { user, logout } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const navigation = [{ name: 'Log out', handleClick: handleSignOut }]

  function handleClick() {
    const dropdowns = document.querySelector('.dropdown-content')
    if (dropdowns?.classList.contains('hidden')) {
      dropdowns.classList.remove('hidden')
    } else {
      dropdowns?.classList.add('hidden')
    }
  }

  return (
    // <div>
    //   <img
    //     onClick={handleClick}
    //     src={`${user?.picture}`}
    //     className="relative rounded-full max-w-11"
    //   ></img>
    //   <div className="absolute right-5 dropdown-content hidden mt-2 p-2 text-gray-600 border-2">
    //     <a className="" onClick={handleSignOut}>
    //       Log out
    //     </a>
    //   </div>
    // </div>
    <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
      {navigation.map((item) => (
        <div key={item.name}>
          <a
            onClick={item.handleClick}
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
          >
            {item.name}
          </a>
        </div>
      ))}
    </div>
  )
}
